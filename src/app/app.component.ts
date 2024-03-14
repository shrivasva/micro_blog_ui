import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {LoginComponent} from './container/login/LoginComponent';
import {BlogComponent} from './container/blog-list/blog/blog.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {BlogListComponent} from './container/blog-list/blog-list.component';
import {RegisterComponent} from './container/register/register.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, LoginComponent, BlogListComponent, HeaderComponent, FooterComponent, BlogComponent, RegisterComponent]
})
export class AppComponent {
    title = 'Blog';
}
