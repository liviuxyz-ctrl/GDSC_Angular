import {Directive, EventEmitter, HostListener} from '@angular/core';
import {Output} from "@angular/core";

@Directive({
  selector: '[appScroll]'
})
export class ScrollDirective {
  @Output() onScrollDown = new EventEmitter<number>();

  @HostListener('wheel', ['$event'])
  onScroll(event : WheelEvent){
    if(event.deltaY > 0){
      this.onScrollDown.emit(1);
    }
    else this.onScrollDown.emit(-1);
  }

  constructor() { }

}
