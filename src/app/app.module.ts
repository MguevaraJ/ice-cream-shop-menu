import { NgModule } from '@angular/core';

import { SharedModule } from "./shared/shared.module";
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeModule } from './modules/home/home.module';
import { MenuModule } from './modules/menu/menu.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    HomeModule,
    MenuModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
