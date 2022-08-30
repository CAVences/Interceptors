import { HttpErrorResponse, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const headers = new HttpHeaders({
      'x-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MTM1ODM4NDRkNzA5OWIyNjlmOGJkNGUiLCJpYXQiOjE2NjE4NDAzNzQsImV4cCI6MTY2MTkyNjc3NH0.HU1hMOfynTslf1MECTzfF-m5vMLuyKyWwjIHXxLg-Hg'
    })

    const reqclone = req.clone({
      headers
    })

    console.log(reqclone)

    return next.handle(reqclone).pipe(
      catchError(this.mensajeError)
    )
  }

  mensajeError( error: HttpErrorResponse ) {
    return throwError(() => new Error('hola'))
  }
}
