import {Injectable} from '@angular/core';
import {Http,Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService{
    private username ='ysmanohar';
    private client_id ='b0a7fbd8d627c56d2921';
    private client_secret ='ef7515363931fb147b08662899dd420d000c13df';

    constructor(private _http:Http){
           console.log('Github Service Init..');
    } 

    getUser(){
        console.log(this.username);
         return this._http.get('https://api.github.com/users/'+this.username)
        .map(res => res.json());
    } 

    getRepos(){
         return this._http.get('https://api.github.com/users/'+this.username+"/repos")
        .map(res => res.json());
    } 

    updateUsername(username:string){
            this.username=username;
    }

}