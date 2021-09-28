import { Component } from '@angular/core';
import { ProductoService } from './services/producto.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  title = 'Sumativa1';

  constructor(public productoService: ProductoService) {
    //aquí se cargan los json u otras cosas que se consumen en la aplicación
    console.log('Estamos en app componente');
  }
}
