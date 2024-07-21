import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heroName:string[]=['Spiderman', 'Hulk', 'Thor', 'Ironman'];

  public deleteHero?:string


  deleteHeroEnd():void{
    const hero = this.heroName.pop();
    this.deleteHero =  hero;
  };
}
