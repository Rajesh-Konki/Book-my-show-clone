import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatDialogModule} from '@angular/material/dialog';
import { SharedRoutingModule } from './shared-routing.module';
import { ScrollComponent } from './scroll/scroll.component';
import { LoginPopupComponent } from './login-popup/login-popup.component';
import { DataEmptyComponent } from './data-empty/data-empty.component';



@NgModule({
  declarations: [ScrollComponent, LoginPopupComponent, DataEmptyComponent],
  imports: [
    CommonModule,
    SharedRoutingModule,
    MatDialogModule

  ],
  exports:[
    ScrollComponent
  ]
})
export class SharedModule { }
