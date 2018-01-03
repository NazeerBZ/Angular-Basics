import { Component } from '@angular/core';

@Component({
  selector: 'hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent {

  title: string = 'Pipe Example';
  toDate: Date = new Date();
}
