import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ShowDetailsComponent } from './components/show-details/show-details.component';
import { SeasonDetailsComponent } from './components/season-details/season-details.component';
//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [
    AppComponent,
    ShowDetailsComponent,
    SeasonDetailsComponent
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    //NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
