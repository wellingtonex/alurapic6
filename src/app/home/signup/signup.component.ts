import { PlatformDetectorService } from 'src/app/core/platform-detector/platform-detector.service';
import { Router } from '@angular/router';
import { SignupService } from './singup.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { NewUser } from './new-user';
import { UserNotTakenValidatorService } from './user-not-taken.validator.service';
import { lowerCaseValidator } from 'src/app/shared/validators/loweCaseValidator';

@Component({
  templateUrl: './signup.component.html'
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;
  @ViewChild('emailInput') emailInput: ElementRef<HTMLInputElement>;

  constructor(
    private formBuilder: FormBuilder,
    private userNotTakenValidatorService: UserNotTakenValidatorService,
    private signUpService: SignupService,
    private router: Router,
    private platformDetectorService: PlatformDetectorService
  ) { }

  ngOnInit() {

    const fn = this.userNotTakenValidatorService.checkUserNameTaken();
    this.signupForm = this.formBuilder.group({
      email: ['',
        [
          Validators.required,
          Validators.email
        ]
      ],
      fullName: ['',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(40)
        ],
      ],
      userName: ['',
        [
          Validators.required,
          lowerCaseValidator,
          Validators.minLength(2),
          Validators.maxLength(30)
        ],
        fn
      ],
      password: ['',
        [
            Validators.required,
            Validators.minLength(8),
            Validators.maxLength(14)
        ]
      ]
    });

    if (this.platformDetectorService.isPlatformBrowser()) {
      this.emailInput.nativeElement.focus();
    }
  }

  signup() {
    const newUser = this.signupForm.getRawValue() as NewUser;
    this.signUpService
        .signup(newUser)
        .subscribe(
            () => {
              console.log('usuario cadastrado com sucesso');
              this.router.navigate(['']);
            },
            err => console.log(err)
        );
}

}
