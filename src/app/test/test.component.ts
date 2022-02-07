import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from '../data.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
  providers:[]
})
export class TestComponent implements OnInit {

  //redirect update-form form onClick
   goToUpdate(id:string) {
this._router.navigate([`edit/${id}`]);
   }

   //getJokes store in Joke to call on component.html
public jokes = this._fireBaseService.getJokes();

//call deleteJoke from the service
 deleteJoke(id:string) {
this._fireBaseService.deleteJoke(id).then(()=>{this.jokes = this._fireBaseService.getJokes();});

}
//call service and router into constructor
  constructor(private _fireBaseService:FirebaseService,private _router:Router) { }

  ngOnInit(): void {
  }

}
