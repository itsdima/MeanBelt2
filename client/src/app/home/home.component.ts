import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['../app.component.css']
})
export class HomeComponent implements OnInit {
  allPets: any; 
  constructor(
    private _http: HttpService, 
    private _route: ActivatedRoute, 
    private _router: Router
  ) { }

  ngOnInit() {
    this.getAll();
  }

  getAll(){
    var status = this._http.getAll(); 
    status.subscribe(data => {
      this.allPets = data; 
      console.log(data);
    });
  }

  details(id){
    this._router.navigate(['/details/'+id]);
  }

  edit(id){
    this._router.navigate(['/edit/'+id]);
  }

}
