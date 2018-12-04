import { environment } from './../../../environments/environment';
import { NewUser } from './new-user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


const API_URL = environment.ApiUrl;


@Injectable()
export class SignupService {

  constructor(private httpClient: HttpClient) { }

  checkUserNameTaken(userName: string) {
    return this.httpClient.get(API_URL + '/user/exists/' + userName);
  }

  signup(newUser: NewUser) {
    return this.httpClient.post(API_URL + '/user/signup', newUser);
  }
}
