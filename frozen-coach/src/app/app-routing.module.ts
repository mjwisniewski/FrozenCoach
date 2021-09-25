import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { FrozenCoachComponent } from './pages/frozen-coach/frozen-coach.component';
import { AboutLadyKnightsComponent } from './pages/lady-knights/about-lady-knights/about-lady-knights.component';
import { GameRulesComponent } from './pages/lady-knights/game-rules/game-rules.component';
import { LadyKnightsComponent } from './pages/lady-knights/lady-knights.component';

const routes: Routes = [
  { path: '', component: FrozenCoachComponent },
  {
    path: 'LadyKnights', component: LadyKnightsComponent, children: [
      // { path: '', component: LadyKnightsComponent },
      { path: 'About', component: AboutLadyKnightsComponent },
      { path: 'GameRules', component: GameRulesComponent }
    ]
  },
  { path: 'About', component: AboutComponent },
  // { path: 'about', component: AboutComponent },
  // { path: 'contact', component: ContactComponent },
  // { path: 'admin', component: AdminComponent },
  // { path: 'registration', component: RegistrationComponent },
  { path: '**', component: FrozenCoachComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
