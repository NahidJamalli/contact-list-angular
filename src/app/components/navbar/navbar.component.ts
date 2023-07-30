import {Component} from '@angular/core';
import {AuthService} from "../../services/auth/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private authService: AuthService, private router: Router) {
  }

  hasError: boolean = false;

  async logout() {
    let result = await this.authService.logout("");
    if (result.hasError) {
      this.hasError = true
    } else {
      localStorage.removeItem('user')
      this.router.navigate(['/login']);
    }
  }
}
