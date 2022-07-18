import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from "../../shared/shared.module";
import { HomeRoutingModule } from './home-routing.module';

import { HomeComponent } from './components/home/home.component';
import { CurtainComponent } from './components/curtain/curtain.component';

@NgModule({
  declarations: [
    HomeComponent,
    CurtainComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
