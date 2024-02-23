import { Routes } from '@angular/router';
import { LoginComponent } from './container/login/login.component';
import { BlogListComponent } from './container/blog-list/blog-list.component';
import { ContainerComponent } from './container/container.component';
import { ExperiemnComponent } from './experiemn/experiemn.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: '', component: ContainerComponent },
    { path: 'blogs', component: BlogListComponent },
];
