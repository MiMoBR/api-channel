import { Component, OnInit } from '@angular/core';
import { AllContent } from '../model/allContent';
import { BlogServices } from '../service/blogService';

@Component({
  selector: 'app-maincontent',
  templateUrl: './maincontent.component.html',
  styleUrls: ['./maincontent.component.css']
})
export class MaincontentComponent implements OnInit {

  allContent: AllContent[];

  constructor(
    private blogServices: BlogServices
  ) { }

  ngOnInit() {
    this.blogServices.fullContent().subscribe(data => {
      this.allContent = data;
      console.log(this.allContent);
      console.table(this.allContent);
    })
  }

}
