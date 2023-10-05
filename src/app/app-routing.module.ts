import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SingupComponent } from './signup/signup.component';

const routes: Routes = [
  {redirectTo:'', path:'login', pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'singup',component:SingupComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
