import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

interface User {
  name: string;
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private users: User[] = []; // Fake database
  private loggedInUser: User | null = null;

  constructor(private router: Router) {
    this.loadUsers();
  }
  private loadUsers() {
    const storedUsers = localStorage.getItem('users');
    this.users = storedUsers ? JSON.parse(storedUsers) : [];
  }
    private saveUsers() {
    localStorage.setItem('users', JSON.stringify(this.users));
  }

  register(name: string, email: string, password: string): boolean {
    // Check if email exists
    if (this.users.find(u => u.email === email)) return false;

    this.users.push({ name, email, password });
     this.saveUsers();
    return true;
  }

  login(email: string, password: string): boolean {
    const user = this.users.find(u => u.email === email && u.password === password);
    if (user) {
      this.loggedInUser = user;
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('userEmail', user.email);
      return true;
    }
    return false;
  }

  logout() {
    this.loggedInUser = null;
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userEmail');
    this.router.navigate(['/login']);
  }

  isAuthenticated(): boolean {
    return localStorage.getItem('isLoggedIn') === 'true';
  }
}
