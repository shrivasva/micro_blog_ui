import {Directive, Input, Renderer2, ViewContainerRef} from '@angular/core';

@Directive({
    selector: '[appDisabled]',
    standalone: true
})
export class DisabledDirective {

    constructor(private viewContainer: ViewContainerRef, private render: Renderer2) {
        // this.viewContainer.element.nativeElement.style.display = 'none'
        render.setStyle(this.viewContainer.element.nativeElement, 'display', 'none')
    }

    @Input() set appDisabled(element: any) {
    }

}
