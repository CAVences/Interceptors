import { Component } from '@angular/core';
import { UsuariosService } from './services/usuarios.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'interceptorApp';

  constructor( private usuarioService: UsuariosService ) {
    this,usuarioService.obtenerUsuarios().subscribe({
      next: (response: any) => {
        console.log(response)
      }, error: (error) => {
        console.log(error.message)
      }
    });
    this.getUser()
  }


  getUser() {
    this.usuarioService.getUser().subscribe({
      next: (response) => {
        console.log(response)
      }, error: (error) => {
        console.log(error)
      }
    })
  }




}
