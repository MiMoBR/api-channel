import { Component, OnInit } from '@angular/core';
import { BlogServices } from '../service/blogService';
import {Router} from '@angular/router'; 

@Component({
  selector: 'app-backoffice',
  templateUrl: './backoffice.component.html',
  styleUrls: ['./backoffice.component.css']
})
export class BackofficeComponent implements OnInit {
  content = {
    url:'',
    title:'',
    subTitle:'',
    dtCreated:''
  };
  submitted = false;

  constructor(
    private blogServices: BlogServices,
    private router: Router
  ){}

  ngOnInit() {}

  saveNewContent(): void {
    const data = {
      url: this.content.url,
      title: this.content.title,
      subTitle: this.content.subTitle,
      dtCreated: new Date()
    };

    this.blogServices.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
          this.router.navigate(['/blog/mainContent']);
        },
        error => {
          console.log(error);
        });
  }

}
