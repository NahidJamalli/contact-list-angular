import {Component, OnInit} from '@angular/core';
import {GetLoginRequest} from "../../../models/auth/request/loginRequest";
import {AuthService} from '../../../services/auth/auth.service'
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private authService: AuthService, public router: Router) {
  }

  loginRequest: GetLoginRequest = {} as GetLoginRequest;
  uiMessage: string = "";
  hasError: boolean = false;

  async login() {
    localStorage.setItem('user', "token")

    let result = await this.authService.login(this.loginRequest)
    if (result.hasError) {
      this.uiMessage = result.error.error.userMessage;
      this.hasError = true
      setTimeout(() => this.hasError = false, 2000)
    } else {
      localStorage.setItem('user', JSON.stringify(result.data))
      this.router.navigate(['/']);
    }
  }
}
