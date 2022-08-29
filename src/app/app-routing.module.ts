import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfirmacionComponent } from './confirmacion/confirmacion.component';
import { RegistroComponent } from './registro/registro.component';
import { SolicitarComponent } from './solicitar/solicitar.component';

const routes: Routes = [
  { path: ':id/registrar/:llave', component: RegistroComponent },
  { path: 'solicitar', component: SolicitarComponent },
  { path: 'estado/:mensaje', component: ConfirmacionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
