import { Routes } from '@angular/router';
import { SigninComponent } from './core/auth/pages/signin/signin.component';
import { SignupComponent } from './core/auth/pages/signup/signup.component';

export const routes: Routes = [
    {
        path: '', redirectTo: '/sign-in', pathMatch: 'full'
    },
    {
        path: 'sign-in', component: SigninComponent
    },
    {
        path: 'sign-up', component: SignupComponent
    },

    // {
    //     path: 'admin', component: AdminComponent, canActivate: [authGuard]
    // }
];
