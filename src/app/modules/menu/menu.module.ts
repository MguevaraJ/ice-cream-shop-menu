import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from "../../shared/shared.module";
import { MenuRoutingModule } from "./menu-routing.module";

import { MenuComponent } from './components/menu/menu.component';
import { MaterialModule } from "../material/material.module";
import { BarComponent } from './components/bar/bar.component';


@NgModule({
  declarations: [
    MenuComponent,
    BarComponent
  ],
  imports: [
    CommonModule,
    MenuRoutingModule,
    MaterialModule,
    SharedModule
  ]
})
export class MenuModule { }
