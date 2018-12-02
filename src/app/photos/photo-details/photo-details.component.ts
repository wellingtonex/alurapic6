import { PhotoService } from './../photo/photo.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Photo } from '../photo/photo';
import { Observable } from 'rxjs';
import { PhotoComment } from '../photo/photo-comment';



@Component({
  templateUrl: './photo-details.component.html'
})
export class PhotoDetailsComponent implements OnInit {

  photo$: Observable<Photo>;
  photoId: number;

  constructor(
    private route: ActivatedRoute,
    private photoService: PhotoService
  ) { }

  ngOnInit() {
    this.photoId = this.route.snapshot.params.photoId;
    console.log(this.photoId);
    this.photo$ =  this.photoService.findById(this.photoId);
  }

}
