import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopHeaderComponent } from './Module/top-header/top-header/top-header.component';
import { MenuHeaderComponent } from './Module/top-header/menu-header/menu-header.component';
import { HttpClientModule } from '@angular/common/http';
import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import {
  GoogleLoginProvider,
  FacebookLoginProvider,
} from 'angularx-social-login';
import { MovieSearchComponent } from './Module/top-header/movie-search/movie-search.component';
import {MovieModule} from './Module/movie/movie.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTabsModule} from '@angular/material/tabs';
import {EventModule} from './Module/event/event.module';
import {PlaysModule} from './Module/plays/plays.module';
import {SportsModule} from './Module/sports/sports.module';
import {ActivitiesModule} from './Module/activities/activities.module';
import {DashboardModule} from './Module/dashboard/dashboard.module'
@NgModule({
  declarations: [
    AppComponent,
    TopHeaderComponent,
    MenuHeaderComponent,
    MovieSearchComponent,
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    AppRoutingModule,
    SocialLoginModule,
    SportsModule,
    MatTabsModule,
    ActivitiesModule,
    DashboardModule,
    MatButtonModule,
    MatExpansionModule,
    MatDialogModule,
    HttpClientModule,
    EventModule,
    PlaysModule,
    MovieModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatIconModule,
    MatCheckboxModule
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('332661351112750'),
          },
        ],
      } as SocialAuthServiceConfig,
    }
  ],
  exports:[
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
