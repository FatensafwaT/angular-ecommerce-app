import { Component, signal } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import {  NavbarComponent } from './components/navbar/navbar';
import { Footer } from './components/footer/footer';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Footer,NavbarComponent,RouterModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
  
})
export class App {
  protected readonly title = signal('ecommerce-app');
}
