import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor( private http: HttpClient ) { }

  obtenerUsuarios() {

    let params = new HttpParams().append('page', '2');
    // params = params.append('nombre', 'Cristobal Vennces');
    // const headers = new HttpHeaders({
    //   'token-usuario': 'JDSHW3223SRWER8247893EHR398HRU394'
    // })

    return this.http.get('https://reqres.in/api/users', { params })
                    .pipe(
                      map( (response: any) => response['data']),
                    )
  }

  getUser() {
    return this.http.get('https://backend-adminpros.herokuapp.com/api/usuarios');
  }
}
