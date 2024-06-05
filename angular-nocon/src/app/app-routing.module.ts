import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogowanieComponent } from './logowanie/logowanie.component';

const routes: Routes = [
  { path: 'login', component: LogowanieComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }, 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
