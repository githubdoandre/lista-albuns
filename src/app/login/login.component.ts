import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { ErrorStateMatcher } from '@angular/material/core';
import { TestBed } from '@angular/core/testing';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private authService: AuthService, private router: Router) { }

  email: String;
  pass: String;

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  passFormControl = new FormControl('', [
    Validators.required,
  ]);

  signIn() {
    if (this.passFormControl.hasError('required') || this.emailFormControl.hasError('required') ||
      this.emailFormControl.hasError('email')) return;
    this.authService.signIn();
    this.router.navigateByUrl('/albuns');
  }
}



