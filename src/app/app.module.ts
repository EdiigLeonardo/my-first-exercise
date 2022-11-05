import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HelloWorldComponent } from './components/hello-world/hello-world.component';
import { PiadaComponent } from './components/piada/piada.component';
import { ButtonRirComponent } from './components/button-todo/button-rir.component';
import { HeaderComponent } from './components/header/header.component';
import { PiadaItemComponent } from './components/piada-item/piada-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './pages/home/home.component';
import {RouterOutlet} from "@angular/router";
import { NavComponent } from './components/nav/nav.component';
import {ProfileComponent} from "./pages/profile/profile.component";

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    PiadaComponent,
    ButtonRirComponent,
    HeaderComponent,
    PiadaItemComponent,
    HomeComponent,
    NavComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    AppRoutingModule,
    RouterOutlet
  ],
  providers: [],
  exports: [
    HeaderComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
