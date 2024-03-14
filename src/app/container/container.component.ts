import {Component, ViewChild} from '@angular/core';
import {LoginComponent} from './login/LoginComponent';
import {BlogListComponent} from "./blog-list/blog-list.component";
import {BlogDetailComponent} from "./blog-list/blog-detail/blog-detail.component";
import {NgIf} from '@angular/common';

@Component({
    selector: 'app-container',
    standalone: true,
    templateUrl: './container.component.html',
    styleUrl: './container.component.css',
    imports: [LoginComponent, BlogListComponent, BlogDetailComponent, NgIf]
})
export class ContainerComponent {

    @ViewChild(BlogListComponent) blogListComponent: BlogListComponent

    stest(): any {
        alert("")
        console.log(this.blogListComponent.blogs)
    }
}
