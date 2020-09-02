import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventComponent } from './event.component';
import { SharedModule } from '../../Module/shared/shared.module';
import { EventListComponent } from './event-list/event-list.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { EventInfoComponent } from '../../Module/shared/event-info/event-info.component';
import {MatCardModule} from '@angular/material/card';
import { Routes, RouterModule } from '@angular/router';
import {MatDividerModule} from '@angular/material/divider';


const routes: Routes = [
  {path:'eventInfo', component:EventInfoComponent}]
@NgModule({
  declarations: [EventComponent, EventListComponent, EventListComponent, EventInfoComponent ],
  imports: [
    CommonModule,
    SharedModule,
    MatExpansionModule,
    MatDividerModule,
    MatCheckboxModule,
    MatCardModule,
    RouterModule.forRoot(routes),
    
    

    
  ],
  exports:[
  
    
  ]
})
export class EventModule { }
