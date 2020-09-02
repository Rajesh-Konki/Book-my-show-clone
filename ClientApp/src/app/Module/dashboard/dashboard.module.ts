import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import {SharedModule} from '../../Module/shared/shared.module';
import { DashboardEventComponent } from './dashboard-event/dashboard-event.component'



@NgModule({
  declarations: [DashboardComponent, DashboardEventComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class DashboardModule { }
