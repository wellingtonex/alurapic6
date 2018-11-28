import { Router } from '@angular/router';
import { SingupService } from './singup.service';
import { UserNotTakenValidatorService } from './user-not-taken.validator.service';
import { lowerCaseValidator } from 'src/app/shared/validators/loweCaseValidator';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { NewUser } from './new-user';

@Component({
  templateUrl: './singup.component.html',
})
export class SingupComponent implements OnInit {

  signupForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private userNotTakenValidatorService: UserNotTakenValidatorService,
    private signUpService: SingupService,
    private router: Router
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
