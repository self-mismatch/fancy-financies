import { Route } from '@angular/router';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { MainComponent } from './pages/main/main.component';
import { ReportsComponent } from './pages/main/reports/reports.component';
import { ReportFullComponent } from './pages/main/reports/report-full/report-full.component';

export const appRoutes: Route[] = [
    {
        path: 'welcome',
        component: WelcomeComponent,
    },
    {
        path: 'main',
        component: MainComponent,
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'reports',
            },
            {
                path: 'reports',
                component: ReportsComponent,
            },
            {
                path: 'reports/:id',
                component: ReportFullComponent,
            },
        ],
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/welcome',
    },
];
