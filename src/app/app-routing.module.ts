import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PersonDetailsComponent} from './pages/person-details/person-details.component';
import {PersonListComponent} from './pages/person-list/person-list.component';
import {LoginComponent} from "./pages/auth/login/login.component";
import {RootLayoutComponent} from "./common/layouts/root-layout.component";
import {AuthLayoutComponent} from "./common/layouts/auth-layout.component";
import {NotFoundComponent} from "./components/not-found/not-found.component";
import {AuthGuardService as AuthGuard} from "./services/auth/auth-guard.service";

const routes: Routes = [
  {
    path: '',
    component: RootLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {path: '', component: PersonListComponent},
      {path: 'people/:id', component: PersonDetailsComponent},
    ],
  },
  {
    path: 'login',
    component: AuthLayoutComponent,
    children: [
      {path: '', component: LoginComponent},
    ],
  },
  {path: 'not-found', component: NotFoundComponent},
  {path: '**', redirectTo: 'not-found', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
