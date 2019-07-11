import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  btnSubmitted = false;
  admin = 'admin';
  constructor(
    private fb: FormBuilder,
    private dataService: DataService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  get loginform() {
    return this.loginForm.controls;
  }
  onSubmit() {
    this.btnSubmitted = true;
    // if (this.loginForm.invalid) {
    //   return;
    // }
    if (this.validation()) {
      localStorage.setItem('token', this.loginform.username.value );
      this.router.navigate(['/home']);
    }
  }
  validation() {
    if (this.loginform.username.value === 'admin') {
      if (this.loginform.password.value === 'admin' ) {
        this.dataService.success('Login Success');
        return true;
      } else {
        this.dataService.error('Password is invalid');
      }
    } else {
      this.dataService.error('User name is invalid');
    }
  }
}
