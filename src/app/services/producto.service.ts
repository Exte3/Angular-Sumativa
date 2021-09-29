import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductoService {
  //temporal: Producto = {};
  productos: Producto[] = [];
  Carrito_Compra: Producto[] = [];

  constructor(private http: HttpClient) {
    this.cargarProductos();
  }
  public cargarProductos() {
    this.http.get('assets/data/producto.json').subscribe((respuesta: any) => {
      this.productos = respuesta.productos;
      console.log(this.productos);
    });
  }
  agregaralcarrito(Producto: any): void {
    //console.log('se esta metiendo a la función carrito');
    this.Carrito_Compra.push(Producto);
    //console.log(Producto);
    console.log('Este es el contenido del carrito', this.Carrito_Compra);
  }
  onSave($event: Producto) {
    console.log('Funciona event', $event);
    console.log('Este es el contenido del carrito', this.Carrito_Compra);
  }
}
