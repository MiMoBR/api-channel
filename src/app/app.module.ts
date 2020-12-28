import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';

import { AppRountingModule, routingComponets } from './app-routing.module';

import { ReactiveFormsModule  } from '@angular/forms';
import { FormsModule  } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { ApixuServiceWeather } from './weather-channel/servicesWT/apixu.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LocationResultComponent } from './weather-channel/location-result/location-result.component';
import { LocationSearchComponent } from './weather-channel/location-search/location-search.component';
import { BlogComponent } from './blog/blog.component';
import { LoginComponent } from './blog/login/login.component';
import { BackofficeComponent } from './blog/backoffice/backoffice.component';
import { MaincontentComponent } from './blog/maincontent/maincontent.component';
import { HeaderblogComponent } from './blog/headerblog/headerblog.component';
import { UpdateComponent } from './blog/update/update.component';
import { DeletecontentComponent } from './blog/deletecontent/deletecontent.component';

@NgModule({
  declarations: [ 
    AppComponent,
    HeaderComponent, 
    routingComponets, 
    LocationResultComponent, 
    LocationSearchComponent, 
    BlogComponent, 
    LoginComponent, 
    BackofficeComponent, 
    MaincontentComponent, 
    HeaderblogComponent, 
    UpdateComponent, 
    DeletecontentComponent ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AppRountingModule,
    BrowserAnimationsModule
  ],
  providers: [Title, ApixuServiceWeather],
  bootstrap: [AppComponent]
})

export class AppModule { }