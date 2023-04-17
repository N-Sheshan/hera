import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-your-insurance',
  templateUrl: './your-insurance.component.html',
  styleUrls: ['./your-insurance.component.css']
})
export class YourInsuranceComponent implements OnInit {

visibiles1 :boolean=true;visibiles2:boolean=false;
onclicks1(){
  this.visibiles1=true
  this.visibiles2=false
}
onclicks2(){
  this.visibiles2=true
  this.visibiles1=false
}
// =========================================
  constructor() { }

  ngOnInit(): void {
  }

}
