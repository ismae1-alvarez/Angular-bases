import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  public title :string = "Mi primera app Angular";
  public counter :number = 10;

  incrementBy(numero:number):void{
    this.counter += numero
  };

  reset():void{
    this.counter =  10;
  };



}
