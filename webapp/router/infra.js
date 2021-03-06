import React from "react";
import store from 'dataflow/store';

import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ROLES } from '../constants';

import { AdminRoute } from './auth';

const renderRoutes = (routes = []) => {
    return routes.map((route, i) => {
        return (<RouteWithSubRoutes key={i} {...route} />);
    });
}

const getByAccess = (access) => {
    if (access === ROLES.ADMIN) {
        return AdminRoute;
    }

    return Route;
}

const RouteWithSubRoutes = ({path, routes, access, component, extraProps}) => {
    const Component = component;
    const RouteComponent = getByAccess(access);

    return (
        <RouteComponent
            path={path}
            render={props => (
                <Component {...{...props, ...extraProps}}>
                    <Switch>{renderRoutes(routes)}</Switch>
                </Component>
            )}
        />
    );
}

export const AppRouter = ({ routes }) => (
    <Provider store={store}>
        <Router>
            <Switch>{renderRoutes(routes)}</Switch>
        </Router>
    </Provider>
);

export default AppRouter;