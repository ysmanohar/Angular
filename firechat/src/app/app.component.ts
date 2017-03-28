import { Component } from '@angular/core';
import {AngularFireModule,AngularFire,AuthProviders,FirebaseListObservable,AuthMethods} from 'angularfire2';
import {Location,LocationStrategy, PathLocationStrategy} from '@angular/common';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [Location, {provide: LocationStrategy, useClass: PathLocationStrategy}],
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items: FirebaseListObservable<any>;
  name: any;
  msgVal: String='';
  location: Location;
  

  constructor(public af:AngularFire,location: Location){
    this.location = location;
    this.items=af.database.list('/messages',{
      query :{
        limitToLast:5
      }
    })

    this.af.auth.subscribe(auth =>{
      if(auth){
        this.name=auth;
      }
    })
  }

  login(){
    this.af.auth.login({
      provider:AuthProviders.Facebook,
      method: AuthMethods.Popup 
    })
  }

  logout(){
    this.af.auth.logout();
    location.reload();
  }

  chatSend(theirMessage:String){
    this.items.push({message:theirMessage, name: this.name.facebook.displayName,url:this.name.facebook.photoURL});
    this.msgVal='';
  }
}
