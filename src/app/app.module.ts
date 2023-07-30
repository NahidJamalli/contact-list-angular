import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {PersonListComponent} from './pages/person-list/person-list.component';
import {FormsModule} from '@angular/forms';
import {PersonDetailsComponent} from './pages/person-details/person-details.component';
import {NotFoundComponent} from './components/not-found/not-found.component';
import {AlertComponent} from './components/alert/alert.component';
import { RootLayoutComponent } from './common/layouts/root-layout.component';
import { AuthLayoutComponent } from './common/layouts/auth-layout.component';
import {LoginComponent} from "./pages/auth/login/login.component";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PersonListComponent,
    PersonDetailsComponent,
    LoginComponent,
    NotFoundComponent,
    AlertComponent,
    RootLayoutComponent,
    AuthLayoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
