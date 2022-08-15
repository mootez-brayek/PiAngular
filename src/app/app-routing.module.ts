import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { HeaderComponent } from './header/header.component';
import { LeftComponent } from './left/left.component';
import { MiddleAccueilComponent } from './middle-accueil/middle-accueil.component';

const routes: Routes = [
  {path:'header',component:HeaderComponent},
  {path:'Left',component:LeftComponent},
  {path:'body',component:BodyComponent},
  {path:'MiddleAcc',component:MiddleAccueilComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
