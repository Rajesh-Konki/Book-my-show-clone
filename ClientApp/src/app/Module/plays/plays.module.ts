import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaysComponent } from './plays.component';
import {SharedModule} from '../../Module/shared/shared.module'
import {PlayCardsComponent} from '../plays/play-cards/play-cards.component';
import {MatCardModule} from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCheckboxModule } from '@angular/material/checkbox';



@NgModule({
  declarations: [PlaysComponent,PlayCardsComponent],
  imports: [
    CommonModule,
    SharedModule,
    MatCardModule,
    MatExpansionModule,
    MatCheckboxModule
    
  ]
})
export class PlaysModule { }
