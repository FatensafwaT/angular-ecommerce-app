import { Component } from '@angular/core';
import { AuthService } from '../../auth/auth-service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css']
})
export class NavbarComponent {

  constructor(public authService: AuthService) {}

  logout() {
    this.authService.logout();
  }
}
