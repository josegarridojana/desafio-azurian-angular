import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from '../../models/usuario.model';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-usuario-details',
  templateUrl: './usuario-details.component.html',
  styleUrls: ['./usuario-details.component.css'],
})
export class UsuarioDetailsComponent implements OnInit {
  @Input() viewMode = false;

  @Input() currentUsuario: Usuario = {
    name: '',
    password: '',
	email: '',
    active: false,
	created: new Date(),
	modified: new Date(),
	lastLogin: new Date()
  };

  message = '';

  constructor(
    private usuarioService: UsuarioService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getUsuario(this.route.snapshot.params['id']);
    }
  }

  getUsuario(id: string): void {
    this.usuarioService.get(id).subscribe({
      next: (data) => {
        this.currentUsuario = data;
        console.log(data);
      },
      error: (e) => console.error(e)
    });
  }

  updatePublished(status: boolean): void {
    const data = {
      name: this.currentUsuario.name,
      password: this.currentUsuario.password,
	  email: this.currentUsuario.email,
      active: status
    };

    this.message = '';

    this.usuarioService.update(this.currentUsuario.id, data).subscribe({
      next: (res) => {
        console.log(res);
        this.currentUsuario.active = status;
        this.message = res.message
          ? res.message
          : 'The status was updated successfully!';
      },
      error: (e) => console.error(e)
    });
  }

  updateUsuario(): void {
    this.message = '';

    this.usuarioService
      .update(this.currentUsuario.id, this.currentUsuario)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message
            ? res.message
            : 'This tutorial was updated successfully!';
        },
        error: (e) => console.error(e)
      });
  }

  deleteUsuario(): void {
    this.usuarioService.delete(this.currentUsuario.id).subscribe({
      next: (res) => {
        console.log(res);
        this.router.navigate(['/usuarios']);
      },
      error: (e) => console.error(e)
    });
  }
}
