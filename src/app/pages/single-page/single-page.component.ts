import { Component } from '@angular/core';
import {about} from 'src/assets/district';
@Component({
  selector: 'app-single-page',
  templateUrl: './single-page.component.html',
  styleUrls: ['./single-page.component.css']
})
export class SinglePageComponent {
  about:any;
  ngOnInit(){
   let id=localStorage.getItem("title")
   console.log("jh",id)
   this.about=about.filter(e=>e.name==id)
   console.log(this.about)
  }
}
