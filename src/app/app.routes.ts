import { Routes } from '@angular/router';
import { DashboardComponent } from './manager/dashboard/dashboard';
import { PendingRequestsComponent } from './manager/pending-requests/pending-requests';

export const routes: Routes = [
  { path: '', component: PendingRequestsComponent },   // ✅ MAIN PAGE
  { path: 'dashboard', component: DashboardComponent }, // optional
  { path: '**', redirectTo: '' }
];
