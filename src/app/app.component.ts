import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'simple';

  constructor(private router: Router) { }

  get token() {
    return localStorage.getItem('token');
  }
  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
