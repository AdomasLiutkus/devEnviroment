import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { IntroComponent } from './component/intro/intro.component';
import { CanActivateHome } from './guard/can-activate-home';

const routes: Routes = [
  { path: 'intro', component: IntroComponent },
  { path: 'home', component: HomeComponent, canActivate: [CanActivateHome] },
  { path: '**', redirectTo: '/intro', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
