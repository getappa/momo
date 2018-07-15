import React from "react";

import { AdminRoute } from './auth';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const renderRoutes = (routes = []) => {
    return routes.map((route, i) => {
        return (<RouteWithSubRoutes key={i} {...route} />);
    });
}

const RouteWithSubRoutes = ({path, routes, ...extra}) => (
    <Route
        path={path}
        render={props => (
            <extra.component {...props}>
                <Switch>{renderRoutes(routes)}</Switch>
            </extra.component>
        )}
    />
);

export const AppRouter = ({ routes }) => (
    <Router>
        <Switch>{renderRoutes(routes)}</Switch>
    </Router>
);

export default AppRouter;