import { Subject } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { AuthService } from './../../core/auth.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './signin.component.html'
})
export class SigninComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login() {
    const userName = this.loginForm.get('userName').value;
    const password = this.loginForm.get('password').value;

    this.authService.authenticate(userName, password)
      .subscribe(
        () => {
          console.log('autenticado');
          //this.router.navigateByUrl('user/' + userName);
          this.router.navigate(['user', userName]);
        }, error => {
        console.error(error);
        this.loginForm.reset();
      }
    );

  }

}
