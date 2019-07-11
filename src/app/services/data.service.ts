import { Injectable } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  message = '';
  messageType = '';

  constructor( private router: Router ) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.message = '';
      }
    });
   }
  error(message) {
    this.messageType = 'alert-danger';
    this.message = message;
  }
  success(message) {
    this.messageType = 'alert-success';
    this.message = message;
  }
  warning(message) {
    this.messageType = 'alert-warning';
    this.message = message;
  }

}
