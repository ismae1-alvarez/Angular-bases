import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interface/character.interface';
import {v4 as uuid} from 'uuid'
@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  @Output()
  public onDeleteCharacterId:EventEmitter<string> = new EventEmitter();

  @Input()
  public characterList :Character[]=[
    {
      id: uuid() ,
      name: 'Trunks',
      power :1000
    }
  ]

  onDeleteID(id:string):void{

    this.onDeleteCharacterId.emit(id);
  };

}
