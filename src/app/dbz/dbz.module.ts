import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DragonBallModule } from './pages/main-page.component';
import { ListComponent } from './components/list/list.component';
import { CharacterComponent } from './components/character/character.component';



@NgModule({
  declarations: [
    DragonBallModule,
    ListComponent,
    CharacterComponent
  ],
  exports: [
    DragonBallModule
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class DbzModule { }
