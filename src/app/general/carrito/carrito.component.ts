import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/interfaces/producto.interface';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.sass'],
})
export class CarritoComponent implements OnInit {
  constructor(public productoService: ProductoService) {}

  ngOnInit(): void {}
}
