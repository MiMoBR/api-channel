import { Component, OnInit } from '@angular/core';
import { AllContent } from '../model/allContent';
import { BlogServices } from '../service/blogService';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {  
  contentToUpdate= {
    id:'',
    url:'',
    title:'',
    subTitle:'',
    dtCreated:''
  };
  submitted = false;
  allContentToUpdate: AllContent[];

  constructor(private blogServices: BlogServices) {}

  ngOnInit() {
    this.blogServices.fullContent().subscribe(data => {
      this. allContentToUpdate = data;
      console.log(this.allContentToUpdate);
      // console.table(this.allContent);
    })
  }

  updateAContent(): void {
    const data = {
      id: this.contentToUpdate.id,      
      url: this.contentToUpdate.url,
      title: this.contentToUpdate.title,
      subTitle: this.contentToUpdate.subTitle,
      dtCreated: new Date()
    };
    // console.log("data");
    // console.log(data);

    this.blogServices.update(data)
      .subscribe(
        response => {
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }
}
