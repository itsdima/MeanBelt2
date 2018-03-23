import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['../app.component.css']
})
export class EditComponent implements OnInit {
  updatePet: any; 
  id: any; 
  errors: any; 
  constructor(
    private _http: HttpService, 
    private _route: ActivatedRoute, 
    private _router: Router 
  ) { }

  ngOnInit() {
    this._route.params.subscribe((params: Params)=>{
      this.id = params['id']; 
    });
    this.getOne(this.id);
    this.updatePet = [{name: '', type: '', description: '', skills: [{skill: ''}, {skill: ''}, {skill: ''}]}];
  }

  getOne(id){
    var status = this._http.getPet(id);
    status.subscribe(data => {
      this.updatePet = data; 
    });
  }

  Update(){
    var status = this._http.update(this.id, this.updatePet);
    status.subscribe(data => {
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
        this._router.navigate(['/details/'+this.id]);
      }
    })
  }

}
