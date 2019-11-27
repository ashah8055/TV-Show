import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ShowDetailsComponent } from './components/show-details/show-details.component';
import { SeasonDetailsComponent } from './components/season-details/season-details.component';
import { EpisodesDetailsComponent } from './components/episodes-details/episodes-details.component';
import { MatStepperModule } from '@angular/material/stepper';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './search/search.component';
import { EpisodesInfoComponent } from './components/episodes-info/episodes-info.component';
//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'search', component: SearchComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ShowDetailsComponent,
    SeasonDetailsComponent,
    EpisodesDetailsComponent,
    HeaderComponent,
    FooterComponent,
    NavigationComponent,
    HomeComponent,
    SearchComponent,
    EpisodesInfoComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
    //NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
