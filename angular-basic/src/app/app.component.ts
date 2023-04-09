import { Component } from '@angular/core';

@Component({
  selector: 'ab-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular - basic: hello world ;-)';

  counter: number = 0;

  sumar(add: number){
    this.counter += add;
  }
}
