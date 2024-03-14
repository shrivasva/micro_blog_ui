import {Component, ContentChild, ElementRef, Input} from '@angular/core';
import {Blog} from '../blog/Blogs';
import {BlogListComponent} from '../blog-list.component';
import {NgFor, NgIf} from '@angular/common';
import {DownloadComponent} from "../../download/download.component";

@Component({
    selector: 'app-blog-detail',
    standalone: true,
    templateUrl: './blog-detail.component.html',
    styleUrl: './blog-detail.component.css',
    imports: [NgIf, NgFor, DownloadComponent]
})
export class BlogDetailComponent {
    @ContentChild("para") para: ElementRef
    blogs: Blog;
    @Input()
    blogListComponent: BlogListComponent

    testNgComponent() {
        console.log(this.para)
    }

}
