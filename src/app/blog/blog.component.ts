import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  loadedFeatureBlog = 'mainContentBlog';

  onNavigateBlog(feature:string){
    this.loadedFeatureBlog = feature;
    console.log(feature);
  }

  ngOnInit() {

  }

}
