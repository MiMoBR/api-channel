import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HashtagComponent } from './hashtag/hashtag.component';
import { CocktailComponent } from './cocktail/cocktail.component';
import { BibleComponent } from './bible/bible.component';
import { WeatherChannelComponent } from './weather-channel/weather-channel.component';

import { BlogComponent } from './blog/blog.component';
import { MaincontentComponent } from './blog/maincontent/maincontent.component';
import { BackofficeComponent } from './blog/backoffice/backoffice.component';
import { DeletecontentComponent } from './blog/deletecontent/deletecontent.component';
import { UpdateComponent } from './blog/update/update.component';
import { LoginComponent } from './blog/login/login.component';

const routes: Routes = [
    {path: '',  redirectTo: 'blog', pathMatch: 'full'},
    {path: 'hashtagUrl', component: HashtagComponent},
    {path: 'cocktailUrl', component: CocktailComponent},
    {path: 'bibleUrl', component: BibleComponent},
    {path: 'weatherUrl', component: WeatherChannelComponent},
    {path: 'blog', component: BlogComponent},
    {path: 'blog/mainContent', component: MaincontentComponent},
    {path: 'blog/backofficeAContent', component: BackofficeComponent},
    {path: 'blog/deleteAContent', component: DeletecontentComponent},
    {path: 'blog/updateAContent', component: UpdateComponent},
    {path: 'blog/loginBackoffice', component: LoginComponent},
  ];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRountingModule { }
export const routingComponets = [
  HashtagComponent, 
  CocktailComponent, 
  BibleComponent,
  WeatherChannelComponent,
  BlogComponent,
  MaincontentComponent,
  BackofficeComponent,
  DeletecontentComponent,
  UpdateComponent,
  LoginComponent
];