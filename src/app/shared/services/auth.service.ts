import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {CommonMessage} from '../models/common-message';



@Injectable({
  providedIn: 'root'
})


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient)  {

  }

  // onboardUser(data: object) {
  //   return this.http.post<CommonMessage>(`${environment.api_url}auth/register`, data);
  // }

  login(data: object) {
    return this.http.post<CommonMessage>(`${environment.api_url}auth/login`, data);
  }

  // getIPAddress() {
  //   return this.http.get('//api.ipify.org/?format=json');
  // }
}
