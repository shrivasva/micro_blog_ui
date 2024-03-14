import {Component, Input} from '@angular/core';
import {NgFor, NgIf} from '@angular/common';
import {Blog} from './Blogs';

@Component({
    selector: 'app-blog',
    standalone: true,
    imports: [NgFor, NgIf],
    templateUrl: './blog.component.html',
    styleUrl: './blog.component.css'
})
export class BlogComponent {
    @Input()
    blogData: Blog;

    constructor() {
    }
} 