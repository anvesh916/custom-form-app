import { Directive, HostBinding, Input, HostListener } from '@angular/core';

@Directive({
    selector:"[appMousePointer]"
})
export class MousePointer {
    @Input("appMousePointer") default: String;
    @Input("mouseleave") mouseleave: string;
    @HostBinding("style.cursor") cursor = this.default;
    constructor() {
        this.default = "pointer";
        this.mouseleave = "grab";
    }

    @HostListener("mouseenter") onMouseEnter () {
        this.cursor = this.default;
    }

    @HostListener("mouseleave") onMouseLeave() {
        this.cursor = this.mouseleave;
    }
}