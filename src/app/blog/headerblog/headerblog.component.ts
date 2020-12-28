import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-headerblog',
  templateUrl: './headerblog.component.html',
  styleUrls: ['./headerblog.component.css']
})
export class HeaderblogComponent implements OnInit {
  @Output() featureSelectedNavBlog = new EventEmitter<string>();

  onSelectNavBlog(feature: string){
    this.featureSelectedNavBlog.emit(feature);
  }

  /*  Title Dinamic  */
  title = 'feature';
  constructor(private titleService: Title) {};
  setDocTitle(title: string) {
    // console.log('current title:::::' + this.titleService.getTitle());
    this.titleService.setTitle(title);
  }

  ngOnInit() {
  }

}
