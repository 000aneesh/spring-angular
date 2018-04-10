import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class EchoService {

private _url: string =  '';

  constructor(private _http: Http){}

  getEcho(msg:string) {
  
      return this._http.get(this._url+"/echo")
           .map( (response: Response) =>{
              if(response.status < 200 || response.status >= 300) {
                throw new Error('This request has failed ' + response.status)
              } else {
               return response.json();
              }
            })
           .catch(this._errorHandler);
           
    //return "Hello " + msg;
  }
  
    _errorHandler(_error: Response){
   // document.getElementsByTagName('html')[0].classList.remove('loading');
    return Observable.throw(_error || 'server error 404');
  }
}