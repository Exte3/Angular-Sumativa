import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.sass'],
})
export class DetalleComponent implements OnInit {
  constructor(public productoService: ProductoService) {}

  ngOnInit(): void {}
}
