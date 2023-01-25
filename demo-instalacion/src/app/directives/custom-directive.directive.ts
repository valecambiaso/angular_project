import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCustomDirective]'
})
export class CustomDirectiveDirective {
  constructor(
    private renderer: Renderer2, //Clase de Angular para poder utilizar contenido
    private elementRef: ElementRef //Obtener la referencia al elemento html que utilizo la directiva
  ) { 
    renderer.setStyle(elementRef.nativeElement, 'font-family', 'Century Gothic, CenturyGothic, AppleGothic');
  }

}
