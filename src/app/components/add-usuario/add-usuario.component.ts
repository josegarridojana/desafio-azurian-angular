import { Component } from '@angular/core';
import { Usuario } from '../../models/usuario.model';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-add-usuario',
  templateUrl: './add-usuario.component.html',
  styleUrls: ['./add-usuario.component.css'],
})
export class AddUsuarioComponent {
  usuario: Usuario = {
    name: '',
    password: '',
    email: '',
	active: false,	
	created: new Date(),
	modified: new Date(),
	lastLogin: new Date()
  };
  submitted = false;

  constructor(private usuarioService: UsuarioService) {}

  saveUsuario(): void {
    const data = {
      name: this.usuario.name,
      password: this.usuario.password,
	  email: this.usuario.email
    };

    this.usuarioService.create(data).subscribe({
      next: (res) => {
        console.log(res);
        this.submitted = true;
      },
      error: (e) => console.error(e)
    });
  }

  newUsuario(): void {
    this.submitted = false;
    this.usuario = {
      name: '',
      password: '',
	  email: '',
      active: false,
	  created: new Date(),
	  modified: new Date(),
	  lastLogin: new Date()	
    };
  }
}
