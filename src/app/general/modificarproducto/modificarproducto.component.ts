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
}
