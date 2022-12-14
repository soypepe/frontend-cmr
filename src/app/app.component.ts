import { Component, Input, OnInit } from '@angular/core';
import { RestApiService } from './shared/rest-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend-cmr';
  correo = ''
  error!: string
  correcto!: string
  constructor(private restApi: RestApiService) { }
  enviarCorreo() {
    console.log(this.correo)
    if (this.correo == '' || undefined) {
      this.error = 'La casilla de correo no puede estar vacia'
    } else {
      this.restApi.crearToken(this.correo).subscribe((data) => {
        this.error = data.mensaje
      })
    }
  }
}
