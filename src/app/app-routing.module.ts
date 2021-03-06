import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './general/login/login.component';
import { RegisterComponent } from './general/register/register.component';
import { CardComponent } from './general/card/card.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './general/error/error.component';
import { CarritoComponent } from './general/carrito/carrito.component';
import { DetalleComponent } from './general/detalle/detalle.component';
import { ModificarproductoComponent } from './general/modificarproducto/modificarproducto.component';
import { PagoComponent } from './general/pago/pago.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'producto', component: CardComponent },
  { path: 'carrito', component: CarritoComponent },
  { path: 'detalle', component: DetalleComponent },
  { path: 'modificar', component: ModificarproductoComponent },
  { path: 'pago', component: PagoComponent },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
