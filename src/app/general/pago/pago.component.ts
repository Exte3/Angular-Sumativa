import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pago',
  templateUrl: './pago.component.html',
  styleUrls: ['./pago.component.sass'],
})
export class PagoComponent implements OnInit {
  tipo_tarjeta: string = '';
  nombre_cliente_tarjeta: string = '';
  numero_tarjeta: string = '';
  codigo_tarjeta: string = '';
  mes_expiaracion_tarjeta: string = '';
  ano_expiaracion_tarjeta: string = '';

  //Variables comprovación errores
  registered: boolean | null = false;
  errorRegister: boolean | null = false;
  errores: string[] = [];

  constructor() {}

  ngOnInit(): void {}
  confirmar(): void {
    this.registered = false;
    this.errorRegister = false;
    this.errores = [];
    /* Aqui agregar validaciones */
    if (this.tipo_tarjeta.length < 3 || this.tipo_tarjeta == null) {
      console.log('El Tipo de Tarjeta debe tener mínimo 4 caracteres');
      this.errores.push('El Tipo de Tarjeta debe tener mínimo 4 caracteres');
      this.errorRegister = true;
    }
    if (
      this.nombre_cliente_tarjeta.length < 6 ||
      this.nombre_cliente_tarjeta == null
    ) {
      console.log('El Nombre en la tarjeta debe tener mínimo 6 caracteres');
      this.errores.push(
        'El Nombre en la tarjeta debe tener mínimo 6 caracteres'
      );
      this.errorRegister = true;
    }
    if (this.numero_tarjeta.length < 10 || this.numero_tarjeta == null) {
      console.log('El Número de tarjeta debe tener mínimo 10 caracteres');
      this.errores.push('El Número de tarjeta debe tener mínimo 10 caracteres');
      this.errorRegister = true;
    }
    if (this.codigo_tarjeta.length < 3 || this.codigo_tarjeta == null) {
      console.log('El Número de tarjeta debe tener mínimo 3 caracteres');
      this.errores.push('El Número de tarjeta debe tener mínimo 3 caracteres');
      this.errorRegister = true;
    }
    if (
      this.mes_expiaracion_tarjeta.length < 1 ||
      this.mes_expiaracion_tarjeta == null ||
      this.mes_expiaracion_tarjeta.length > 2
    ) {
      console.log(
        'El més de expiración debe tener mínimo 1 caracterer y maximo 2'
      );
      this.errores.push(
        'El més de expiración debe tener mínimo 1 caracterer y maximo 2'
      );
      this.errorRegister = true;
    }
    if (
      this.ano_expiaracion_tarjeta.length < 2 ||
      this.ano_expiaracion_tarjeta == null ||
      this.ano_expiaracion_tarjeta.length > 2
    ) {
      console.log(
        'El año de expiración debe tener mínimo 1 caracterer y maximo 2'
      );
      this.errores.push(
        'El año de expiración debe tener mínimo 1 caracterer y maximo 2'
      );
      this.errorRegister = true;
    }

    if (!this.errorRegister) {
      this.registered = true;
    }
  }
}
