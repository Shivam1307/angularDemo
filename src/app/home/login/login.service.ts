import { Injectable } from '@angular/core';
import { LoginComponent } from './login.component';

@Injectable()
export class LoginService {
  constructor() { }
  checkLogin(username, password) {
    const uname = 'shivam';
    const pass = 'shivam';
    if (username === uname && pass === password) {
      alert ('user successfuly login');
      console.log('hello');
      localStorage.setItem('currentUser', username);
      return false;
    }else {
      localStorage.setItem('currentUser', username);
      alert('wrong username and password');
      return false;
    }
  }
}
