import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivitiesComponent } from './activities.component';
import { ActivityCardsComponent } from './activity-cards/activity-cards.component';
import {SharedModule} from '../../Module/shared/shared.module'

import {MatCardModule} from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCheckboxModule } from '@angular/material/checkbox';



@NgModule({
  declarations: [ActivitiesComponent, ActivityCardsComponent],
  imports: [
    CommonModule,
    SharedModule,
    MatCardModule,
    MatExpansionModule,
    MatCheckboxModule
  ]
})
export class ActivitiesModule { }
