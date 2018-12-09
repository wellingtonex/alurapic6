import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { AuthService } from '../../core/auth/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { PlatformDetectorService } from 'src/app/core/platform-detector/platform-detector.service';
import { Title } from '@angular/platform-browser';

@Component({
  templateUrl: './signin.component.html'
})
export class SigninComponent implements OnInit {

  fromUrl: string;
  loginForm: FormGroup;
  @ViewChild('userNameInput') userNameInput: ElementRef<HTMLInputElement>;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private platformDetectorService: PlatformDetectorService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute
    .queryParams.subscribe(params => this.fromUrl = params.fromUrl);
    this.loginForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
    if (this.platformDetectorService.isPlatformBrowser()) {
      this.userNameInput.nativeElement.focus();
    }
  }

  login() {
    const userName = this.loginForm.get('userName').value;
    const password = this.loginForm.get('password').value;

    this.authService.authenticate(userName, password)
      .subscribe(
        () => {
          console.log('autenticado');

          if (this.fromUrl) {
            this.router.navigateByUrl(this.fromUrl);
          } else {
            //this.router.navigateByUrl('user/' + userName);
            this.router.navigate(['user', userName]);
          }
        }, error => {
        console.error(error);
        this.loginForm.reset();
        if (this.platformDetectorService.isPlatformBrowser()) {
          this.userNameInput.nativeElement.focus();
        }
      }
    );

  }

}
