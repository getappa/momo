import React from 'react';
import Infra from './infra';

import { ROLES } from '../constants';
import { DashboardLayout, LoginLayout } from 'layout';
import { AdminDashboard } from 'pages/admin';

const routes = [{
    path: '/login',
    component: LoginLayout
}, {
    path: '/',
    component: DashboardLayout,
    access: ROLES.ADMIN,
    routes: [
        { exact: true, path: '/', component: AdminDashboard },
    ]
}];

export const AppRouter = () => (
    <Infra routes={routes} />
);

export default AppRouter;