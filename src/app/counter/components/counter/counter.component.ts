
import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template:
  `
    <h3>mi numero {{counter}}</h3>

    <button (click)="incrementBy(+1)" >+1</button>
    <button (click)="reset()">reset</button>
    <button (click)="incrementBy(-2)">-1</button>
  `
})

export class CounterComponent  {
   public counter :number = 10;

  incrementBy(numero:number):void{
    this.counter += numero
  };

  reset():void{
    this.counter =  10;
  };
}
