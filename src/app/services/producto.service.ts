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
  placeholder: Producto = {
    id: 1,
    nombre: 'Aladdin',
    descripcion: 'Basado en la pelicula de Disney',
    precio: 29990,
    imagen: '/assets/img/Aladdin.png',
    stock: 8,
  };
  subtotal: number = 0;
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
  eliminar(id: any): void {
    console.log('Eliminaremos el id: ', id);
    let precio = 0;
    for (let i = 0; i < this.Carrito_Compra.length; i++) {
      if (this.Carrito_Compra[i].id === id) {
        //this.productos[id - 1].stock = this.productos[id].stock + 1;
        id = i;
        precio = this.Carrito_Compra[i].precio;

        i = this.Carrito_Compra.length;
      }
    }
    let index = this.Carrito_Compra.indexOf(id);
    let idn: number = id;

    this.Carrito_Compra.splice(idn, 1);
    this.subtotal = this.subtotal - precio;
    console.log(this.Carrito_Compra);
  }
  total() {
    console.log('Se esta calculando el total');
    for (let i = 0; i < this.Carrito_Compra.length; i++) {
      if (this.Carrito_Compra[i].precio != undefined) {
        let tempasd: number = 0;
        tempasd = this.Carrito_Compra[i].precio;
        this.subtotal = this.subtotal + tempasd;
      }
    }
  }
}
