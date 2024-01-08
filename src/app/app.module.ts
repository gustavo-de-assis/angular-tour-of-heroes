import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { FormsModule } from '@angular/forms';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HeroDetailComponent, FormsModule, HeroesComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
