import { Component } from '@angular/core';
import { DbzService } from '../services/dbz.service';
import { Character } from '../interface/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl : './main-page.component.html'
})

export class DragonBallModule  {
  constructor(private dbzService:DbzService){};

  get characters():Character[]{
    return [...this.dbzService.character];
  };

  onDeleteCharacter(id:string):void{
    this.dbzService.onDeleteCharacter(id);
  };
  onNewCharacter(character:Character):void{
    this.dbzService.addCharacter(character);
  }
}

