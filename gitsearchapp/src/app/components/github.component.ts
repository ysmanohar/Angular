import { Component } from '@angular/core';
import  {GithubService}  from '../services/github.service';

@Component({
  moduleId:module.id,
  selector: 'github',
  templateUrl: `github.component.html`,
  providers:[GithubService]
})
export class Githubcomponent  {
    user:any;
    repos:any;
    username:string;

    constructor(private _githubService:GithubService){
         console.log('Github Component');        
    }  

    search(){
       this._githubService.updateUsername(this.username);

       this._githubService.getUser().subscribe(user =>{
             //console.log(users);
              this.user =user;
         })

         this._githubService.getRepos().subscribe(repos =>{
             //console.log(users);
              this.repos =repos;
         })
    }

}
