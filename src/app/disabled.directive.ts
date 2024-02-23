import { Directive } from '@angular/core';

@Directive({
  selector: '[appDisabled]',
  standalone: true
})
export class DisabledDirective {

  constructor() { }

}
