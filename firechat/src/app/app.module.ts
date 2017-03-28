import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule} from '@angular/router'
import { AppComponent } from './app.component';
import {AngularFireModule} from 'angularfire2';



export const firebaseConfig = {
    apiKey: "AIzaSyAWFdGLpyY_W0HlhBgIwGO0pgyGdGEmCR8",
    authDomain: "fir-auth-e7323.firebaseapp.com",
    databaseURL: "https://fir-auth-e7323.firebaseio.com",
    storageBucket: "fir-auth-e7323.appspot.com",
    messagingSenderId: "22860282827"
  };

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
