import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginCredentials } from '../data-models/loginDataModel/credentialsModel';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email: string = '';
  password: string = '';
  loginData: LoginCredentials = new LoginCredentials();
  toast: { message: any; };
  showToaster: boolean;

  constructor(private router: Router, private loginService: LoginService) { }

  ngOnInit(): void {
    this.showToaster = false;
  }

  login() {
    this.loginService.getAuthToken(this.loginData).subscribe((response: any) => {
      const token = response.token_type + ' '  + response.access_token;
      sessionStorage.setItem('token', token);
      sessionStorage.setItem('user', response.user);
      this.router.navigate(['/pages/ordersList/received']);
     },
     error => {
      this.showToaster = true;
      this.toast = {
        message: error.error.message,
      }
    }
     );
     
  }

  removeToaster() {
    this.showToaster = false;
  }

}
