import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass'],
})
export class NavbarComponent implements OnInit {
  Busqueda: string | null = '';

  constructor() {}

  ngOnInit(): void {}

  buscar(): void {
    console.log('Usted esta buscando: ', this.Busqueda);
  }
}
