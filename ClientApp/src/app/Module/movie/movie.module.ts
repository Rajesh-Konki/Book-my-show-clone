import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieComponent } from './movie.component';
import { MovieCardsComponent } from '../movie/movie-cards/movie-cards.component';

import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatExpansionModule} from '@angular/material/expansion';
import { Routes, RouterModule } from '@angular/router';
import { MovieInfoComponent } from '../movie/movie-info/movie-info.component';
import {SharedModule}  from '../../Module/shared/shared.module'
import {MatTabsModule} from '@angular/material/tabs';
import { MovieBookingComponent } from './movie-booking/movie-booking.component';
import {YouTubePlayerModule} from '@angular/youtube-player';
import { DataEmptyComponent } from '../shared/data-empty/data-empty.component';


const routes: Routes = [
  {path:'comingsoon', component: MovieCardsComponent},
  {path:'movieInfo', component: MovieInfoComponent},
  {
    path:'exclusive',component:DataEmptyComponent,
  }
];


@NgModule({
  declarations: [MovieComponent,
    MovieCardsComponent,
    MovieInfoComponent,
    MovieBookingComponent

  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    SharedModule,
    MatExpansionModule,
    MatCheckboxModule,
    YouTubePlayerModule,
    MatTabsModule
    
    
    
  ],
  exports:[
    MovieComponent,
    RouterModule,
    
   
  ]
})
export class MovieModule { }
