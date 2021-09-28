import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/interfaces/producto.interface';
import { ProductoService } from 'src/app/services/producto.service';
import { CarritoComponent } from '../carrito/carrito.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.sass'],
})
export class CardComponent implements OnInit {
  constructor(public productoService: ProductoService) {}
  temporal: Producto = {};
  ngOnInit(): void {}

  agregaralcarrito(): void {
    //CarritoComponent.Carrito_Compra;
  }
}
