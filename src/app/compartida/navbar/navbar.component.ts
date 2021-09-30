import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass'],
})
export class NavbarComponent implements OnInit {
  Busqueda: string | null = '';

  constructor(public productoService: ProductoService) {}

  ngOnInit(): void {}

  buscar(): void {
    console.log('Usted esta buscando: ', this.Busqueda);
  }
}
