import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SportsComponent } from './sports.component';
import { SportCardsComponent } from './sport-cards/sport-cards.component';
import {SharedModule} from '../../Module/shared/shared.module'

import {MatCardModule} from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCheckboxModule } from '@angular/material/checkbox';



@NgModule({
  declarations: [SportsComponent, SportCardsComponent],
  imports: [
    CommonModule,
    SharedModule,
    MatCardModule,
    MatExpansionModule,
    MatCheckboxModule
  ]
})
export class SportsModule { }
