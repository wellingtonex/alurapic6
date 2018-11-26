import { User } from './user';
import { Observable, BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import * as jwt_decode from 'jwt-decode';

import { TokenService } from './../token/token.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private  userSubject = new BehaviorSubject<User>(null);

  constructor(private tokenService: TokenService) {
    if (this.tokenService.hasToken()) {
      this.decodeAndNotify();
    }
  }

  setToken(token: string) {
    this.tokenService.setToken(token);
    this.decodeAndNotify();
  }

  getUser(): Observable<User> {
    return this.userSubject.asObservable();
  }

  private decodeAndNotify() {
    const token  = this.tokenService.getToken();
    const user = jwt_decode(token) as User;
    this.userSubject.next(user);
  }
}
