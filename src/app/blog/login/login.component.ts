import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlogServices } from '../service/blogService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  loginInfo = {
    login: '',
    password: ''
  }
  submitted = false;

  constructor(
    private blogServices: BlogServices,
    private router: Router
  ){}

  ngOnInit() {
  }

  loginForm(): void {
    const data ={
      login: this.loginInfo.login,
      password: this.loginInfo.password
    }
    console.log("data");
    console.log(data);

    this.blogServices.loginService(data)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/bibleUrl']);
        },
        error => {
          console.log(error);
        });
  }

}
