import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component'
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { CarrierComponent } from './carrier/carrier.component';
import { SupportComponent } from './support/support.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component'
import {SignInComponent} from './sign-in/sign-in.component';
import { LogInComponent } from './log-in/log-in.component'
const routes: Routes = [
  {
    path:'', pathMatch:'full', redirectTo:'/index'
  },
  {
    path:'index', component:HomeComponent
  },
  {
    path:'about-us', component:AboutComponent
  },
  {
    path:'blog', component:BlogComponent
  },
  {
    path:'carrier', component:CarrierComponent
  },
  {
    path:'support', component:SupportComponent
  },
  {
    path:'sign-in', component:SignInComponent
  },
  {
    path:'log-in', component:LogInComponent
  },
  {
    path:'**', component:PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
