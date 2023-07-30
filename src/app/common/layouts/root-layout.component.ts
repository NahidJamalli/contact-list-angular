import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root-layout',
  template:`
      <app-navbar></app-navbar>
      <div class="container-fluid mt-2">
          <router-outlet></router-outlet>
      </div>
  `
})
export class RootLayoutComponent {
}
