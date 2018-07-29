extern crate actix;
extern crate actix_web;
extern crate futures;

use std::env;
use futures::Future;
use actix_web::{
    fs, client, server, http,
    App, AsyncResponder, Error, HttpMessage,
    HttpRequest, HttpResponse
};

fn appa_proxy(req: &HttpRequest) -> Box<Future<Item = HttpResponse, Error = Error>> {
    let method = req.method().clone();
    let paths = req.path().split("/appa").collect::<Vec<&str>>();

    let path = match paths.last() {
        Some(path) => path.to_string(),
        None => String::new()
    };

    let uri = format!(
        "http://{}:{}{}",
        env::var("APPA_API_URI").ok().unwrap(),
        env::var("APPA_API_PORT").ok().unwrap(),
        path
    );

    client::ClientRequest::build()
        .uri(uri).method(method)
        .finish().unwrap()
        .send()
        .map_err(Error::from)
        .and_then(|resp| {
            resp.body()
                .from_err()
                .and_then(|body| {
                    Ok(
                        HttpResponse::Ok()
                            .header(http::header::CONTENT_TYPE, "application/json")
                            .body(body)
                    )
                })
        }).responder()
}

fn create_app() -> App {
    App::new()
        .handler("/appa", appa_proxy)
        .handler("/", fs::StaticFiles::new("./static/").unwrap().index_file("index.html"))
}

fn main() {
    let sys = actix::System::new("http-proxy");

    server::new(|| create_app())
        .workers(1)
        .bind("127.0.0.1:3000")
        .unwrap()
        .start();

    println!("Started http server: 127.0.0.1:8080");
    let _ = sys.run();
}