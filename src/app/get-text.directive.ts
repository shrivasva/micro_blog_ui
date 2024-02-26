import { Directive, ElementRef, HostBinding, HostListener, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appGetText]',
  standalone: true
})
export class GetTextDirective  {
  @HostListener('value') inputValue:string = ''

  @HostListener('keypress')logMessage(event: Event){
    console.log(this.inputValue)
  }

  constructor(event: ElementRef) {  console.log(this.inputValue)}
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
  }

}
