import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {

  title = 'Calculadora';
  operandoA: number = 0;
  operandoB: number = 0;
  Resultado: number = 0;

  sumar(): void{

    this.Resultado = this.operandoA + this.operandoB;
  }

  multiplicar(): void{

    this.Resultado = this.operandoA * this.operandoB
  }

  dividir(): void{

    this.Resultado = this.operandoA / this.operandoB
  }

  restar(): void{

    this.Resultado = this.operandoA - this.operandoB
  }

}
