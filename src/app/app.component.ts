import { Component } from '@angular/core';
import { AuthService } from  './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'simples-app';

  constructor(private authService: AuthService) { }

  get isLoggedIn() { 
    return this.authService.isLoggedIn();
  }

  logout() {
    this.authService.logout();
  }
}

