import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import {AppComponent} from './app.component';

import { LoginComponent } from './login/login.component';
import { SingupComponent } from './singup/siup.component';



@NgModule({
  declarations: [
    AppComponent,

    LoginComponent,
    SignupComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

export { AppComponent };

