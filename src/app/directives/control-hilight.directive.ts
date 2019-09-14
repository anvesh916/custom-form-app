import { OnInit, HostBinding, HostListener, Directive, Input } from '@angular/core';

@Directive({
    selector:'[appControlHilight]'
})

export class ControlHilightDirective implements OnInit {
    @HostBinding('class.shadow-lg') boxShadow: Boolean;
    @HostBinding('class.grab') grabbed: Boolean;
    constructor() {

    }
    ngOnInit() {
        this.boxShadow = false;
        this.grabbed = false;
    }

    @HostListener('mouseenter') onMouseEnter (eventData: Event) {
      
        this.boxShadow = true;
        this.grabbed = true;
    }

    @HostListener('mouseleave') onMouseLeave (eventData: Event) {
        this.boxShadow =false;
        this.grabbed = false;
    }
}