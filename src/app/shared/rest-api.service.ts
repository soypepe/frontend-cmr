import { Injectable, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Usuario } from '../shared/usuario';
import { Token } from '../shared/token';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  apiUrl = 'http://localhost:3000/'
  constructor(private http: HttpClient) { }

  httpOpciones = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  @Input() usuarioDetalles = {
    _id: '',
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

  getUsuarios(): Observable<Usuario> {
    return this.http
      .get<Usuario>(this.apiUrl + 'usuarios')
      .pipe(retry(1), catchError(this.handleError))
  }

  getToken(): Observable<any> {
    const id = '11509f4229cd724d'
    const llave = '7dfed6899ff4465d047649f744ca0044'
    return this.http
      .get<Token>(this.apiUrl + id + '/registrar/' + llave)
      .pipe(retry(1), catchError(this.handleError))
  }

  crearToken(correo: any): Observable<Token> {
    correo = { correo: correo }
    return this.http
      .post<Token>(
        this.apiUrl + 'token',
        JSON.stringify(correo),
        this.httpOpciones
      )
  }

  crearUsuario(usuario: any): Observable<Usuario> {
    console.log(usuario)
    return this.http
      .post<Usuario>(
        this.apiUrl + 'usuarios',
        JSON.stringify(usuario),
        this.httpOpciones
      )
  }

  private handleError(error: any): Promise<any> {
    console.error('Ocurrio un error', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
