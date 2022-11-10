import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'esMayor',
})
export class EsMayorPipe implements PipeTransform {
  private readonly limitePorDefecto: number = 500;
  transform(value: number, ...args: any[]) {
    //return value > 200 ? 'Caro' : 'Barato';
    const limite = args[0] ? args[0] : this.limitePorDefecto;
    return value > limite ? 'Caro' : 'Barato';
  }
}
