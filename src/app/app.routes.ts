import { Routes } from '@angular/router';
import { SigninComponent } from './core/auth/pages/signin/signin.component';
import { SignupComponent } from './core/auth/pages/signup/signup.component';
import { LandingPageComponent } from './features/landing-page/landing-page.component';
import { authGuard } from './core/auth/services/auth.guard';

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

    {
        path: 'home', component: LandingPageComponent, 
        canActivate: [authGuard]
    }
];
