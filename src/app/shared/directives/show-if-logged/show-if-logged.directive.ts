import { UserService } from './../../../core/user/user.service';
import { Photo } from './../../photo/photo';
import { Directive, Input, ElementRef, Renderer, OnInit } from '@angular/core';

@Directive({
  selector: '[showiflogged]'
})
export class ShowIfLoggedDirective implements OnInit {


  constructor(
    private element: ElementRef<any>,
    private renderer: Renderer,
    private userService: UserService
    ) { }

  ngOnInit(): void {
    if (!this.userService.isLogged()) {
      this.renderer.setElementStyle(this.element.nativeElement, 'display', 'none');
    }
  }

}
