import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './compartida/navbar/navbar.component';
import { FooterComponent } from './compartida/footer/footer.component';
import { CardComponent } from './general/card/card.component';
import { LoginComponent } from './general/login/login.component';
import { RegisterComponent } from './general/register/register.component';
import { AsideComponent } from './compartida/aside/aside.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './general/error/error.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CarritoComponent } from './general/carrito/carrito.component';
import { DetalleComponent } from './general/detalle/detalle.component';
import { ModificarproductoComponent } from './general/modificarproducto/modificarproducto.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    CardComponent,
    LoginComponent,
    RegisterComponent,
    AsideComponent,
    HomeComponent,
    ErrorComponent,
    CarritoComponent,
    DetalleComponent,
    ModificarproductoComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
