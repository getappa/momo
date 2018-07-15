import React from 'react';
import Infra from './infra';

import { DashboardLayout, LoginLayout } from 'layout';
import { AdminDashboard } from 'pages/admin';

const routes = [{
    path: '/login',
    component: LoginLayout
}, {
    path: '/',
    component: DashboardLayout,
    routes: [
        { exact: true, path: '/', component: AdminDashboard },
        { path: '/a', component: () => (<div>Admin Dashboard 2</div>) },
    ]
}];

export const AppRouter = () => (
    <Infra routes={routes} />
);

export default AppRouter;