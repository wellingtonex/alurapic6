import { UserService } from './../../core/user/user.service';
import { AlertService } from './../../shared/components/alert/alert.service';
import { PhotoService } from './../photo/photo.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ap-photo-form',
  templateUrl: './photo-form.component.html'
})
export class PhotoFormComponent implements OnInit {

  photoForm: FormGroup;
  file: File;
  preview: string;

  constructor(
    private formBuilder: FormBuilder,
    private photoService: PhotoService,
    private router: Router,
    private alertService: AlertService,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.photoForm = this.formBuilder.group({
      file: ['', Validators.required],
      description: ['', Validators.maxLength(300)],
      allowComments: [true]
    });
  }

  upload() {
    const description = this.photoForm.get('description').value;
    console.log(description);
    const allowComments = this.photoForm.get('allowComments').value;
    console.log(allowComments);
    console.log(this.file);
    this.photoService.upload(description, allowComments, this.file)
      .subscribe(() => {
        this.alertService.successe('Upload complete', true);
        this.router.navigate(['/user', this.userService.getUserName()]);
      });

  }

  handleFile(file: File) {
    this.file = file;
    const reader = new FileReader();
    reader.onload = (event: any) => this.preview = event.target.result;
    reader.readAsDataURL(file);
  }

}
