import { Component, OnInit } from '@angular/core';
import { AllContent } from '../model/allContent';
import { BlogServices } from '../service/blogService';

@Component({
  selector: 'app-deletecontent',
  templateUrl: './deletecontent.component.html',
  styleUrls: ['./deletecontent.component.css']
})
export class DeletecontentComponent implements OnInit {
  contentToDelete = {id:''};

  submitted = false;
  allContentToDelete: AllContent[];

  constructor(
    private blogServices: BlogServices
  ) { }

  ngOnInit() {
    this.blogServices.fullContent().subscribe(data => {
      this. allContentToDelete = data;
      console.log(this.allContentToDelete);
      // console.table(this.allContent);
    })
  }

  deleteAContent(): void {
    this.blogServices.deleteContent(this.contentToDelete.id)
      .subscribe(
        response => {
          console.log("response");
          console.log(response);
          // this.router.navigate(['/blog/mainContent']);
        },
        error => {
          console.log("error");
          console.log(error);
        });
  }
}