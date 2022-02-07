import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FirebaseService } from '../data.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  //call postJoke from service
 post(){
  this._fireBaseService.postJoke(
    this.jokeFormGroup.get("joke")?.value,
    this.jokeFormGroup.get("documentName")?.value,
  ).then(()=>setTimeout(()=>{this._router.navigate(["/"])},3000))
}

//define structure form && validators
  jokeFormGroup :FormGroup = new FormGroup({joke:new FormControl("",Validators.required)})
  constructor(private _fireBaseService:FirebaseService,private _router:Router) { }

  ngOnInit(): void {
  }

}
