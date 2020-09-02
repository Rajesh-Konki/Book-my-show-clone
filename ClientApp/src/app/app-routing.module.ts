import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MovieComponent } from './Module/movie/movie.component';
import { DashboardComponent } from './Module/dashboard/dashboard.component';
import { MovieCardsComponent } from './Module/movie/movie-cards/movie-cards.component';
import { MovieInfoComponent } from './Module/movie/movie-info/movie-info.component';
import { EventComponent } from './Module/event/event.component';
import { EventInfoComponent } from './Module/shared/event-info/event-info.component';
import { PlaysComponent } from './Module/plays/plays.component';
import { SportsComponent } from './Module/sports/sports.component';
import { ActivitiesComponent } from './Module/activities/activities.component';
import { MovieBookingComponent } from './Module/movie/movie-booking/movie-booking.component';
import { DataEmptyComponent } from './Module/shared/data-empty/data-empty.component';
const routes: Routes = [
  {path:'movies', component:MovieComponent,
  children:[
    {
      path:'commingsoon',component:MovieCardsComponent,
      children:[
       { path:'movieInfo',component:MovieInfoComponent}
      ]
    },
    {
      path:'',component: MovieCardsComponent
    },{
      path:'exclusive',component:DataEmptyComponent,
    }
    
  ]},
  {
    path:'bookMovie',component:MovieBookingComponent
  },
  {path:'',component: DashboardComponent},
  {path:'events', component:EventComponent,
children:[
  {
    path:'eventInfo',component:EventInfoComponent
  }
]},
{
  path:'plays',component:PlaysComponent
},
{
  path:'sports',component:SportsComponent
},
{
  path:'activities',component:ActivitiesComponent
}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
