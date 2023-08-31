import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';

import { AuthModule } from './core/auth';
import { HomeComponent } from "./pages/home/ui/home.component";
import { ProfileModule } from "./pages/profile/profile.module";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    ProfileModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
