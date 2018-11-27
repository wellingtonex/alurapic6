import { lowerCaseValidator } from 'src/app/shared/validators/loweCaseValidator';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './singup.component.html',
})
export class SingupComponent implements OnInit {

  signupForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
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
        ]
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

}
