import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-careers',
  templateUrl: './careers.component.html',
  styleUrls: ['./careers.component.css']
})
export class CareersComponent implements OnInit {
// --------------------------------

visibles1 :boolean=false;visibles2 :boolean=false;visibles3 :boolean=false;visibles4 :boolean=false;visibles5 :boolean=false
visible1 :boolean=false;visible2 :boolean=false;visible3 :boolean=false;visible4 :boolean=false

onclick1(){
  this.visible1=!this.visible1
  this.visible2=false;this.visible3 =false;this.visible4=false
}onclick2(){
  this.visible2=!this.visible2
  this.visible1=false;this.visible3 =false;this.visible4=false
}onclick3(){
  this.visible3=!this.visible3
  this.visible2=false;this.visible1 =false;this.visible4=false
}onclick4(){
  this.visible4=!this.visible4
  this.visible2=false;this.visible3 =false;this.visible1=false
}

onclicks1(){
  this.visibles1=!this.visibles1
  this.visibles2=false;this.visibles3 =false;this.visibles4=false;this.visibles5=false
  this.visible2=false;this.visible3 =false;this.visible4=false;this.visible1=false
}onclicks2(){
  this.visibles2=!this.visibles2
  this.visibles1=false;this.visibles3 =false;this.visibles4=false;this.visibles5=false
  this.visible2=false;this.visible3 =false;this.visible4=false;this.visible1=false
}onclicks3(){
  this.visibles3=!this.visibles3
  this.visibles2=false;this.visibles1 =false;this.visibles4=false;this.visibles5=false
  this.visible2=false;this.visible3 =false;this.visible4=false;this.visible1=false
}onclicks4(){
  this.visibles4=!this.visibles4
  this.visibles2=false;this.visibles3 =false;this.visibles1=false;this.visibles5=false
  this.visible2=false;this.visible3 =false;this.visible4=false;this.visible1=false
}onclicks5(){
  this.visibles5=!this.visibles5
  this.visibles2=false;this.visibles3 =false;this.visibles4=false;this.visibles1=false
  this.visible2=false;this.visible3 =false;this.visible4=false;this.visible1=false
}

// --------------------------------------------------------------------
  constructor() { }

  ngOnInit(): void {
  }

}
