import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {
  public status: string;
  loadingFlag = false;
  constructor(public loginService: LoginService, private router: Router) {
   }

  ngOnInit() {
  }
  loadingStart(username, password) {
    this.loadingFlag = true;
    console.log('jsdjf', username.value);
    this.loadingFlag = this.loginService.checkLogin(username.value, password.value);
    if (this.loadingFlag === false) {
      this.router.navigate(['./dashboard']);
    }
  }
}
