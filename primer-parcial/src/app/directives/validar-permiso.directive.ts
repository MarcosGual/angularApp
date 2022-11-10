import { HttpClient } from '@angular/common/http';
import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appValidarPermiso]',
})
export class ValidarPermisoDirective implements OnInit {
  @Input() permiso: string;

  constructor(private elemento: ElementRef, private http: HttpClient) {}

  ngOnInit(): void {
    // this.http.get<any>('http://localhost:3000/permisos').subscribe({
    //   next: (respuestaPermisos:any[])=>{
    //     if(respuestaPermisos.some(x=>x.descripcion===this.permiso)){
    //       alert('Permiso existe')
    //       this.elemento.nativeElement.remove();
    //     }
    //   }
    // })
  }
}
