import {Injectable} from '@angular/core';
import {BaseModelResponse} from 'src/app/models/base-model/response/base-model';
import {GeneralService} from '../general/general.service';
import {LoginResponse} from "../../models/auth/response/loginResponse";
import {PersonResponse} from "../../models/person/response/personResponse";

@Injectable({
  providedIn: 'root'
})
export class AuthService extends GeneralService {
  isAuthenticated(){
    return !!localStorage.getItem('user');
  }
  login(body: any, url: string = "/login"): Promise<BaseModelResponse<LoginResponse>> {
    return this.sendPostRequest(body, url);
  }

  logout(body: any, url: string = "/logout"): Promise<BaseModelResponse<PersonResponse>> {
    return this.sendPostRequest(body, url);
  }
}
