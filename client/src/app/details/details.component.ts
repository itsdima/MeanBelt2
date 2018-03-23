import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['../app.component.css']
})
export class DetailsComponent implements OnInit {
  Pet: any; 
  id: any; 
  count: any; 
  skills: any; 
  constructor(
    private _http: HttpService, 
    private _route: ActivatedRoute, 
    private _router: Router
  ) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params) =>{
      this.id = params['id']
    });
    this.getPet(this.id);
    this.Pet = [{name: '', type: '', description: '', likes: 0, skills: [{skill: ''}, {skill: ''}, {skill: ''}]}];
    this.count = false; 
  }

  getPet(id){
    console.log(id);
    var status = this._http.getPet(id); 
    status.subscribe(data => {
     this.Pet = data; 
     console.log(this.Pet);
   })
  }

  remove(id){
    var status = this._http.remove(id);
    status.subscribe(data => {
      this._router.navigate(['/home']);
    })
  }

  like(){
    var status = this._http.like(this.id);
    status.subscribe(data => {
      this.getPet(this.id);
      this.count = true; 
    });
  }

}
