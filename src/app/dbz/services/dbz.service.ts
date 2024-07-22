import { Injectable } from '@angular/core';
import { Character } from '../interface/character.interface';
import {v4 as uuid} from 'uuid'

@Injectable({providedIn: 'root'})
export class DbzService {


  public character :Character[]= [
    {
      id: uuid(),
      name: "Krilin",
      power : 1000
    },
    {
      id: uuid(),
      name : "Goku",
      power : 9500
    },
    {
      id: uuid(),
      name : "vegeta",
      power : 7500
    }
  ];



  addCharacter(characters:Character):void{
    this.character.push(characters);
  };

  onDeleteCharacter(id:string):void{
    this.character =  this.character.filter( user => user.id !== id);
  };

}
