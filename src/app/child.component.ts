import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  title: string = 'Child Component';
  @Input() count: number;
  @Input() result:number;

  @Output() countChanged: EventEmitter<number> = new EventEmitter();
  
     increment() {
         this.count++;
         this.countChanged.emit(this.count);
       }
     decrement() {
         this.count--;
         this.countChanged.emit(this.count);
     }
}
