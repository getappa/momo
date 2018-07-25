import React from 'react';
import Infra from './infra';

import { ROLES } from '../constants';
import { DashboardLayout } from '@opensanca/burro-react';

import { Login } from 'pages/login';
import { AdminDashboard } from 'pages/admin';

const routes = [{
    path: '/login',
    component: Login
}, {
    path: '/',
    component: DashboardLayout,
    access: ROLES.ADMIN,
    extraProps: {
        logo: ''
    },
    routes: [
        { exact: true, path: '/', component: AdminDashboard },
    ]
}];

export const AppRouter = () => (
    <Infra routes={routes} />
);

export default AppRouter;