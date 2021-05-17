import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnectComponent } from './views/connect/connect.component';
import { CvComponent } from './views/cv/cv.component';
import { HomeComponent } from './views/home/home.component';
import { MeritsComponent } from './views/merits/merits.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'connect', component: ConnectComponent },
  { path: 'merits', component: MeritsComponent },
  { path: 'cv', component: CvComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
