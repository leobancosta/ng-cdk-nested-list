import { Directive, ElementRef, HostListener, Input, OnChanges, Renderer2 } from '@angular/core';

@Directive({
    // tslint:disable-next-line: directive-selector
    selector: '[matElevationDirective]'
})
export class MatElevationDirective implements OnChanges {

    @Input()
    defaultElevation = 4;

    @Input()
    raisedElevation = 8;

    constructor(
        private element: ElementRef,
        private renderer: Renderer2
    ) { }

    @HostListener('mouseenter')
    onMouseEnter(): void {
        this.setElevation(this.raisedElevation);
    }

    @HostListener('mouseleave')
    onMouseLeave(): void {
        this.setElevation(this.defaultElevation);
    }

    ngOnChanges(): void {
        this.setElevation(this.defaultElevation);
    }

    // tslint:disable-next-line: typedef
    setElevation(amount: number) {
        const classesToRemove = Array.from((this.element.nativeElement as HTMLElement).classList)
            .filter(c => c.startsWith('mat-elevation-z'));
        classesToRemove.forEach((c) => {
            this.renderer.removeClass(this.element.nativeElement, c);
        });
        const newClass = `mat-elevation-z${amount}`;
        this.renderer.addClass(this.element.nativeElement, newClass);
    }

}
