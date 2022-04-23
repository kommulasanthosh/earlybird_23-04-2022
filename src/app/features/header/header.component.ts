import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/login/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }
  signOut() {
    this.loginService.signOut().subscribe((response: any) => {
      sessionStorage.removeItem('token');
      sessionStorage.removeItem('user');
       this.router.navigate(['/'])
    });
  }
}
