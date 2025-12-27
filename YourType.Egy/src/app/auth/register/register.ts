import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';
import { AuthService } from '../auth-service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './register.html',
  styleUrls: ['./register.css'],
})
export class RegisterComponent {

  registerForm: FormGroup;
  errorMessage = '';
  successMessage = '';

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  submit() {
    if (this.registerForm.valid) {
      const { name, email, password } = this.registerForm.value;

      const success = this.authService.register(name, email, password);
      if (success) {
        this.successMessage = 'Account created successfully! You can login now.';
        this.errorMessage = '';
        setTimeout(() => this.router.navigate(['/login']), 1500);
      } else {
        this.errorMessage = 'Email already exists!';
        this.successMessage = '';
      }
    }
  }
}
