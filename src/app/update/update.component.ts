import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FirebaseService } from '../data.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {

  //documentName define
  public documentName:string = "";


  //call updateJoke from service
updateJoke(){

  this._firebaseService.updateJoke(this.jokeFormGroup?.get('joke')?.value,this.documentName);
}

//define jokeFormGroup
  jokeFormGroup :FormGroup | undefined;

  //activatedRoute and service firebase defined in the constructor
  constructor(private route:ActivatedRoute,private _firebaseService:FirebaseService) { }

  //writing the current joke in the field
  ngOnInit(): void {
    this.documentName = this.route.snapshot.params['id'];
    this._firebaseService.getJokeById(this.documentName).then((dat)=>{
      this.jokeFormGroup = new FormGroup({joke:new FormControl(dat?.["joke"],Validators.required)})


    })
  }
}
