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
  placeholder: Producto = {};

  constructor(private http: HttpClient) {
    this.cargarProductos();
  }
  public cargarProductos() {
    this.http.get('assets/data/producto.json').subscribe((respuesta: any) => {
      this.productos = respuesta.productos;
      console.log(this.productos);
      this.placeholder = this.productos[0];
    });
  }
  agregaralcarrito(Producto: any): void {
    //console.log('se esta metiendo a la función carrito');
    if (Producto.stock > 0) {
      Producto.stock = Producto.stock - 1;
      this.Carrito_Compra.push(Producto);
      console.log('Este es el contenido del carrito', this.Carrito_Compra);
    } else {
      console.log('No hay elemento');
    }
    //console.log(Producto);
  }
}
