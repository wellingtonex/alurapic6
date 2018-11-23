import { Injectable } from '@angular/core';

const KEY = 'authToken';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  hasToken(): boolean {
    return !!this.getToken();
  }

  setToken(token: string) {
    window.localStorage.setItem(KEY, token);
  }

  getToken(): string {
    return window.localStorage.getItem(KEY);
  }

  removeToke() {
    window.localStorage.removeItem(KEY);
  }
}
