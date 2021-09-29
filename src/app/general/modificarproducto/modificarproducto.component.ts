import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-modificarproducto',
  templateUrl: './modificarproducto.component.html',
  styleUrls: ['./modificarproducto.component.sass'],
})
export class ModificarproductoComponent implements OnInit {
  constructor(public productoService: ProductoService) {}

  ngOnInit(): void {}
  actualizarProducto(Producto: any): void {
    //placeholder, aquí debería ser más un form con el id que recibe para cambiar
    //falta cambiar la vista
    console.log('Se actualiza el producto', Producto.id);
  }

  eliminarProduct(id: any): void {
    //tambien es un placeholder
    console.log('Se ha eliminado producto', id);
  }
}
