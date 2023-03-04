import { Component } from '@angular/core';
import { about } from 'src/assets/district';
import {Router} from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
collections = about;
  constructor(public router : Router){

  }

districts:any;
ngOnInit(){
  this.districts;
}
goTo(id:any){
  localStorage.setItem("title",id);
  this.router.navigate(['/single-page']);
}
}
