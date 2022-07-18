import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from "../modules/material/material.module";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialModule,
    BrowserAnimationsModule,
    BrowserModule
  ],
  exports: [
    MaterialModule,
    BrowserAnimationsModule,
    BrowserModule
  ]
})
export class SharedModule { }
