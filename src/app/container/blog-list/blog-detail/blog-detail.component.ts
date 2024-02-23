import { Component, ContentChild, ElementRef, Input, ViewChild } from '@angular/core';
import { Blog } from '../blog/Blogs';
import { BlogListComponent } from '../blog-list.component';
import { NgIf, NgFor } from '@angular/common';

@Component({
  selector: 'app-blog-detail',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './blog-detail.component.html',
  styleUrl: './blog-detail.component.css'
})
export class BlogDetailComponent {
  @ContentChild("para") para: ElementRef

  testNgComponent() {
    console.log(this.para)
  }
  fun() {
    console.log(this.blogListComponent.blogs)
  }
  blogs: Blog;
  @Input()
  blogListComponent: BlogListComponent

}
