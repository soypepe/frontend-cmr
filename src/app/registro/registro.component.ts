import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../shared/rest-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  constructor(private restApi: RestApiService, private router: Router) { }

  ngOnInit(): void {
  }

  usuario = {
    nombres: '',
    apellidos: '',
    e_civil: '',
    edad: '',
    correo: '',
    celular: '',
    direccion: '',
    nacionalidad: '',
    ci: '',
    clave: '',
    foto_usuario: '',
    foto_ci_anv: '',
    foto_ci_rev: ''
  }
  error = ''

  registrarUsuario() {
    console.log('registrar usuario', this.usuario)
    if (this.usuario.nombres == '' || undefined) {

      this.error = 'La casilla de correo no puede estar vacia'
    } else {
      this.restApi.crearUsuario(this.usuario).subscribe((data) => {
        if (data.mensaje == 'Usuario registrado con exito') {
          if (confirm('Registro con exito') == true) {

            this.router.navigate(['/'])
          }
        }
        else {
          alert('Ocurrio un error al registrar')
        }
      })
    }
  }

}
