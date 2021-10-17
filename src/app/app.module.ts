import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MusicDetailsComponent } from './music-details/music-details.component';

@NgModule({
  declarations: [
    AppComponent,
    MusicDetailsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


// https://www.section.io/engineering-education/search/?q=angular

// @Ouput - A decorator that lets the child component communicates with the parent component.
// @Input - A decorator that allows the parent to communicates with the child component.
