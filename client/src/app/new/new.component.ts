import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router'

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['../app.component.css']
})
export class NewComponent implements OnInit {
  newPet: any;
  errors: any; 
  constructor(
    private _http: HttpService, 
    private _route: ActivatedRoute, 
    private _router: Router
  ) { }

  ngOnInit() {
    this.newPet = {name: '', type: '', description: '', skills: [{skill: ''}, {skill: ''}, {skill: ''}]};
    console.log(this.newPet);
  }

  addPet(){
    console.log(this.newPet);
    var status = this._http.addPet(this.newPet);
    status.subscribe(data => {
      console.log(data, 'returned from add');
      if(data['errors']){
        if(data['errors'].name){
          this.errors = data['errors'].name.message;
        }
        else if(data['errors'].type){
          this.errors = data['errors'].type.message; 
        }
        else if(data['errors'].description){
          this.errors = data['errors'].description.message; 
        }
      }
      else if(data['success']){
        this.errors = '';
        this._router.navigate(['/home']);
      }
      else{
        this.errors = 'Looks like we already have that pet!'
      }
    });
  }

}
