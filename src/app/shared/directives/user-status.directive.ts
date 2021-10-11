import {Directive, ElementRef, Renderer2} from "@angular/core";

@Directive({
  selector: '[userStatus]'
})
export class UserStatusDirective {

  constructor(
    private elRef: ElementRef,
    private renderer: Renderer2
  ) {
    console.log(elRef)
  }
}
