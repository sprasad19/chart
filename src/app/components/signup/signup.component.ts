import { DataService } from './../../services/data.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(  private fb: FormBuilder,
    private dataService: DataService,
    private router: Router ) { }

    signupForm: FormGroup;
    btnSubmitted = false;

  ngOnInit() {
    this.signupForm = this.fb.group({
      fullname: ['', Validators.required],
      contactNo: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  get sign() {
    return this.signupForm.controls;
  }
  onSubmit() {
    this.btnSubmitted = true;
    if (this.signupForm.invalid) {
      return;
    }
  }
  validation(){


  }

}
