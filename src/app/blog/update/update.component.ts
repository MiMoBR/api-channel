import { Component, OnInit } from '@angular/core';
import { AllContent } from '../model/allContent';
import { BlogServices } from '../service/blogService';
import {Router} from '@angular/router'; 

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
    pic1:'',
    dtCreated:''
  };
  submitted = false;
  allContentToUpdate: AllContent[];

  constructor(
    private blogServices: BlogServices,
    private router: Router
  ) {}

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
      pic1: this.contentToUpdate.pic1,
      dtCreated: new Date()
    };
    // console.log("data");
    // console.log(data);

    this.blogServices.update(data)
      .subscribe(
        response => {
          // console.log(response);
          this.router.navigate(['/blog/mainContent']);
        },
        error => {
          console.log(error);
        });
  }
}
