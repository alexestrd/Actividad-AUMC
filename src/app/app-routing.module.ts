import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { ArtistaComponent } from './componets/artista/artista.component';
import { FormularioComponent } from './componets/formulario/formulario.component';
import { PresentacionComponent } from './componets/presentacion/presentacion.component';

const routes: Routes = [
  {path: '', component: PresentacionComponent},
  {path: 'artista', component: ArtistaComponent},
  {path: 'formulario', component: FormularioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
