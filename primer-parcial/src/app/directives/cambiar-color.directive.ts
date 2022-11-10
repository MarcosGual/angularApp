import { Directive, ElementRef, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[cambiarColor]',
})
export class CambiarColorDirective {
  private readonly colores = ['red', 'brown', 'blue', 'blue-violer', 'green'];

  constructor(private elemento: ElementRef) {}

  @HostListener('click')
  onClick() {
    // alert('Hiciste click');
    this.elemento.nativeElement.style.color =
      this.colores[Math.round(Math.random() * (this.colores.length - 1))];
  }
}
