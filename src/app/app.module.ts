import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MovieSelectorComponent } from './movie-selector/movie-selector.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, MovieSelectorComponent ],
  bootstrap:    [ AppComponent ],
})
export class AppModule { }
