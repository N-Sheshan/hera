import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import SwiperCore , {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Virtual,
  Zoom,
  Autoplay,
  Thumbs,
  Controller,
} from 'swiper';
import { BehaviorSubject } from "rxjs";
import Swiper from "swiper/types/swiper-class";

// install Swiper components
SwiperCore.use([
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Virtual,
  Zoom,
  Autoplay,
  Thumbs,
  Controller
]);



var div2=1;
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
  encapsulation:ViewEncapsulation.None,

})
export class HomepageComponent implements OnInit {
  // this code is card show and hiden --------start
  currDiv:string='A';
  ShowDiv(divVal: string){
    this.currDiv=divVal;
  }
  // this code is card show and hiden --------end
  constructor() {
 
  }

  ngOnInit(): void {
    // new name();
  
  }
  

}
