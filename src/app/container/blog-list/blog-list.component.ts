import { Component } from '@angular/core';
import { StaticData } from '../../static.data';
import { BlogComponent } from "./blog/blog.component";
import { NgFor } from '@angular/common';
import { FilterComponent } from "./filter/filter.component";
import { HeaderComponent } from "../../header/header.component";
import { FooterComponent } from "../../footer/footer.component";
import { Blog } from './blog/Blogs';
import { BlogDetailComponent } from "./blog-detail/blog-detail.component";

@Component({
    selector: 'app-blog-list',
    standalone: true,
    templateUrl: './blog-list.component.html',
    styleUrl: './blog-list.component.css',
    imports: [BlogComponent, NgFor, FilterComponent, HeaderComponent, FooterComponent, BlogDetailComponent]
})
export class BlogListComponent {

  
  blogData: any
  blogs: Blog;

  constructor(private staticData: StaticData) {
    this.blogData = staticData.getBlogData()
  }
  searchByName(message: string) {
    this.blogData = this.staticData.getBlogData().filter(blog => blog.name.toLowerCase().includes(message.toLowerCase()))
  }
  searchByLike(likes: number) {
    this.blogData = this.staticData.getBlogData().filter(blog => blog.likes > likes)
  }
  searchByTitle(title: string) {
    this.blogData = this.staticData.getBlogData().filter(blog => blog.title.toLowerCase().includes(title.toLowerCase()))
  }
test(){
  console.log(this.blogs)
}
}
