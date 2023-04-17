import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hera';
  visibles1 :boolean=false;
  visible1 :boolean=false;
  onclicks1(){
    this.visibles1=!this.visibles1
    
  }
  onclick1(){
    this.visible1=!this.visible1
    
  }
  ngOnInit(): void {
  }
  
}
