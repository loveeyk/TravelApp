import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { BlogComponent } from './blog/blog.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TravelComponent } from './travel/travel.component';

const routes: Routes = [

  {
    path: "", component: HomeComponent
  },
  {
    path: "travel", component: TravelComponent
  },
  {  
    path: "about", component: AboutusComponent
  },
   {
    path: "contact", component: ContactusComponent
  },
  {
    path: "blog", component: BlogComponent
  },
  {
    path: '**', component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
