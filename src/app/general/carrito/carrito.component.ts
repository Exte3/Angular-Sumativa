import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/interfaces/producto.interface';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.sass'],
})
export class CarritoComponent implements OnInit {
  nombre: string = '';
  apellido: string = '';
  pais: string = '';
  region: string = '';
  ciudad: string = '';
  comuna: string = '';
  direccion: string = '';
  total: number = 0;
  //direccion2 no es obligatorio
  direccion2: string = '';
  //postal tampoco es obligatorio
  postal: string = '';
  //Variables comprovación errores
  registered: boolean | null = false;
  errorRegister: boolean | null = false;
  errores: string[] = [];

  constructor(public productoService: ProductoService) {}

  ngOnInit(): void {}
  confirmar(): void {
    this.registered = false;
    this.errorRegister = false;
    this.errores = [];
    /* Aqui agregar validaciones */
    if (this.nombre.length < 3 || this.nombre == null) {
      console.log('El Nombre debe tener mínimo 4 caracteres');
      this.errores.push('El Nombre debe tener mínimo 4 caracteres');
      this.errorRegister = true;
    }
    if (this.apellido.length < 3 || this.apellido == null) {
      console.log('El Apellido debe tener mínimo 4 caracteres');
      this.errores.push('El Apellido debe tener mínimo 4 caracteres');
      this.errorRegister = true;
    }
    if (this.pais.length < 3 || this.pais == null) {
      console.log('El País debe tener mínimo 4 caracteres');
      this.errores.push('El Pais debe tener mínimo 4 caracteres');
      this.errorRegister = true;
    }
    if (this.region.length < 1 || this.region == null) {
      console.log('La Region debe tener mínimo 1 caracterer');
      this.errores.push('La Region debe tener mínimo 1 caracterer');
      this.errorRegister = true;
    }
    if (this.ciudad.length < 1 || this.ciudad == null) {
      console.log('La Ciudad debe tener mínimo 1 caracterer');
      this.errores.push('La Ciudad debe tener mínimo 1 caracterer');
      this.errorRegister = true;
      // En Noruega se ubica Å, la ciudad con el nombre más corto del mundo
    }

    if (!this.errorRegister) {
      this.registered = true;
    }
  }
}
