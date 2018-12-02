import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PhotoService } from './../../photo/photo.service';
import { Observable } from 'rxjs';
import { Component, OnInit, Input } from '@angular/core';
import { PhotoComment } from '../../photo/photo-comment';

@Component({
  selector: 'ap-photo-comments',
  templateUrl: './photo-comments.component.html'
})
export class PhotoCommentsComponent implements OnInit {

  comments$: Observable<PhotoComment[]>;

  @Input() photoId: number;
  commentForm: FormGroup;

  constructor(
    private photoService: PhotoService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.comments$ = this.photoService.getComments(this.photoId);

    this.commentForm = this.formBuilder.group({
      comment: ['', Validators.compose([
          Validators.required,
          Validators.maxLength(300)
      ])]
    });
  }

  saveComment() {
    const comment = this.commentForm.get('comment').value;
    this.photoService.addComment(this.photoId, comment)
      .subscribe(() => {
        this.commentForm.reset();
        console.log('Comentario adicionado com sucesso.');
      });
  }
}
