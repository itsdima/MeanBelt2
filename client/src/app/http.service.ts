import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {

  constructor(private _http: HttpClient) { }

  addPet(body){
    return this._http.post('/pet', body);
  }

  getAll(){
    return this._http.get('/pet');
  }

  getPet(id){
    return this._http.get('/pet/'+id);
  }

  update(id, pet){
    return this._http.put('/pet/'+id, pet);
  }

  remove(id){
    return this._http.delete('/pet/'+id);
  }

  like(id){
    var like = {like: 1}; 
    return this._http.put('/pet/like/'+id, like);
  }

}
