import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { LoginCredentials } from '../data-models/loginDataModel/credentialsModel';
import { APIEndPoints } from '../features/common/apiEndPoints';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private client_id = 'ujOuu4uXQjQUlh_2ZERZhpMHB5ixqUMBACJBTQE3a_w';
  private client_secret = 'jOVHHb20qRSawgS3QbjGjUzDUm5aiCKBGmEL2MuovXU';
  
  constructor(private httpClient: HttpClient) { }

  getAuthToken(loginData: LoginCredentials): any {
    const obj = {
      'grant_type': 'password',
      'email': loginData.email,
      'password': loginData.password,
      'client_id': this.client_id,
      'client_secret': this.client_secret
    }
    const url = `${environment.APP_API_BASE}${APIEndPoints.login.getOauth}`;
    return this.httpClient.post(url,obj);
  }

  signOut() {
    const token = sessionStorage.getItem('token');
    const obj = {
      'client_id': this.client_id,
      'client_secret': this.client_secret,
      'token': token
    }
    const url = `${environment.APP_API_BASE}${APIEndPoints.login.signOut}`;
    return this.httpClient.post(url,obj);
  }
}
