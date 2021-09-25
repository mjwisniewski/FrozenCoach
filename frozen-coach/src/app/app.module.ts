import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FrozenCoachComponent } from './pages/frozen-coach/frozen-coach.component';
import { LadyKnightsComponent } from './pages/lady-knights/lady-knights.component';
import { AboutComponent } from './pages/about/about.component';
import { GameRulesComponent } from './pages/lady-knights/game-rules/game-rules.component';
import { AboutLadyKnightsComponent } from './pages/lady-knights/about-lady-knights/about-lady-knights.component';


@NgModule({
  declarations: [
    AppComponent,
    FrozenCoachComponent,
    LadyKnightsComponent,
    AboutComponent,
    GameRulesComponent,
    AboutLadyKnightsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
