import { AbstractControl } from '@angular/forms';
import { SingupService } from './singup.service';
import { Injectable } from '@angular/core';

import { debounceTime, switchMap, map, first } from 'rxjs/operators';

@Injectable({ providedIn: 'root'})
export class UserNotTakenValidatorService {

  constructor(private signUpService: SingupService) {}

  checkUserNameTaken() {
    return (control: AbstractControl) =>  {
      return control
        .valueChanges
        .pipe(debounceTime(300))
        .pipe(switchMap(userName =>
          this.signUpService.checkUserNameTaken(userName)
        ))
        .pipe(map(isTaken => isTaken ? { userNameTaken: true} : null))
        .pipe(first());
    };
  }
}
