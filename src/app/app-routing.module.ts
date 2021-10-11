import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssetListComponent } from './component/asset-list/asset-list.component';
import { IntroComponent } from './component/intro/intro.component';

const routes: Routes = [
  { path: 'intro', component: IntroComponent },
  { path: 'asset-list', component: AssetListComponent },
  { path: '**', redirectTo: '/intro', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
