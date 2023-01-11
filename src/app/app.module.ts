import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './componets/navbar/navbar.component';
import { PresentacionComponent } from './componets/presentacion/presentacion.component';
import { ArtistaComponent } from './componets/artista/artista.component';
import { FormularioComponent } from './componets/formulario/formulario.component';
import { FormsModule } from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PresentacionComponent,
    ArtistaComponent,
    FormularioComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
