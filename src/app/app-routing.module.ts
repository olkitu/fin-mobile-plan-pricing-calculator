import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { MoiMobiiliReilu5GComponent } from './moi-mobiili-reilu5-g/moi-mobiili-reilu5-g.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'MoiMobiiliReilu5G', component: MoiMobiiliReilu5GComponent },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
