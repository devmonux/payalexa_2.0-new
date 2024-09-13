import { Routes, RouterModule } from '@angular/router';
import {ADMIN_ROUTES} from './sub_routes/admin.routes';
import {RETAILER_ROUTES} from './sub_routes/retailer.routes';
import {DISTRIBUTOR_ROUTES} from './sub_routes/distributor.routes';

export const FULL_LAYOUT_ROUTES: Routes = [
  {
    path: 'admin',
    children: ADMIN_ROUTES
  },
  {
    path: 'retailer',
    children: RETAILER_ROUTES
  },
  {
    path: 'distributor',
    children: DISTRIBUTOR_ROUTES
  },
];
