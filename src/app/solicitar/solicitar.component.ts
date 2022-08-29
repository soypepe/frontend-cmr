import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../shared/rest-api.service';

@Component({
  selector: 'app-solicitar',
  templateUrl: './solicitar.component.html',
  styleUrls: ['./solicitar.component.css']
})
export class SolicitarComponent implements OnInit {

  ngOnInit(): void {
  }

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
