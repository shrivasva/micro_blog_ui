import {Directive, ElementRef, HostListener, SimpleChanges} from '@angular/core';

@Directive({
    selector: '[appGetText]',
    standalone: true
})
export class GetTextDirective {
    @HostListener('value') inputValue: string = ''

    constructor(event: ElementRef) {
        console.log(this.inputValue)
    }

    @HostListener('keypress') logMessage(event: Event) {
        console.log(this.inputValue)
    }

    ngOnChanges(changes: SimpleChanges): void {
        console.log(changes)
    }

}
