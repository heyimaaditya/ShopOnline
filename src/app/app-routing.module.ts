import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckOutComponent } from './components/checkOut/check-out.component';
import { SignInComponent } from './components/google-sign-In/sign-in.component';
import { HomeComponent } from './components/home-page/home.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  }, 
  {
    path:'sign-in',
    component: SignInComponent
  },
  {
    path:'home',
    component: HomeComponent
  },
  {
    path:'check-out',
    component: CheckOutComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
