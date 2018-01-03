import { Component } from '@angular/core';

@Component({
  selector: 'app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})

export class AppComponent {
  title1: string = "Component Interaction";
  counter: number = 5;

  num1:number = 0;
  num2:number = 0;
  result:number;

  increment() {
    this.counter++;
  }

  decrement() {
    this.counter--;
  }

  adding() {  
   this.result= this.num1 + this.num2;
  }
}
