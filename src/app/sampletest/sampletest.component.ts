import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sampletest',
  templateUrl: './sampletest.component.html',
  styleUrls: ['./sampletest.component.css']
})
export class SampletestComponent implements OnInit {
  
  currDiv:string='A';
  ShowDiv(divVal: string){
    this.currDiv=divVal;
  }
  constructor() { 
   }

  ngOnInit(): void {

  }
 
}
