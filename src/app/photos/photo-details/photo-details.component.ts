import { UserService } from './../../core/user/user.service';
import { AlertService } from './../../shared/components/alert/alert.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Photo } from '../photo/photo';
import { Observable } from 'rxjs';

import { PhotoService } from './../photo/photo.service';

@Component({
  templateUrl: './photo-details.component.html'
})
export class PhotoDetailsComponent implements OnInit {

  photo$: Observable<Photo>;
  photoId: number;

  constructor(
    private route: ActivatedRoute,
    private photoService: PhotoService,
    private router: Router,
    private alertService: AlertService,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.photoId = this.route.snapshot.params.photoId;
    this.photo$ =  this.photoService.findById(this.photoId);
  }

  remove() {
    this.photoService.removePhoto(this.photoId)
      .subscribe(
        () => {
        this.alertService.successe('Photo removed.', true);
        this.router.navigate(['/user', this.userService.getUserName() ]);
      }, err => {
        console.log(err);
        this.alertService.warging('Could not delete the photo!');
      });
  }
}
