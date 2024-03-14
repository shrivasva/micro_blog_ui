import {Routes} from '@angular/router';
import {LoginComponent} from './container/login/LoginComponent';
import {BlogListComponent} from './container/blog-list/blog-list.component';
import {ContainerComponent} from './container/container.component';
import {RegisterComponent} from './container/register/register.component';
import {ForgotPasswordComponent} from './container/forgot-password/forgot-password.component';
import {authGuard} from './auth.guard';

export const routes: Routes = [
    {path: 'login', component: LoginComponent,},
    {path: 'blogs', component: BlogListComponent, canActivate: [authGuard]},
    {path: 'register', component: RegisterComponent},
    {path: 'forgot', component: ForgotPasswordComponent},
    {path: '', component: ContainerComponent, pathMatch: 'full', canActivate: [authGuard]},
];
