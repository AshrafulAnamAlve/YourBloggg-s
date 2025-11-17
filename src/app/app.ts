import { Component, inject, signal } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterLink ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('BloggingUi');
    router = inject(Router);
    menuOpen = true;
    toggleMenu(){
      this.menuOpen =!this.menuOpen;
    }
    get isLoggin(): boolean{
      return localStorage.getItem('isLoggedIn')=='true';
    }

     logout(){
      localStorage.removeItem("isLoggedIn");
      alert("Logged out");
      this.router.navigateByUrl("/home");
     }
}
