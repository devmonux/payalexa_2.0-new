import { Routes } from '@angular/router';
import { ComponentsComponent } from '../../components/components.component';

export const COMMON_LAYOUT_ROUTES: Routes = [

  {
    path: 'authentication/login',
    loadComponent: () => import('../../authentication/login/login.component').then(c => c.LoginComponent),
    title: 'Login PayAlexa'
  },

  {
    path: 'onboarding',
    loadComponent: () => import('../../../app/onboarding/onboarding.component').then(c => c.OnboardingComponent),
    title: 'Signup User Account'
  }

]
