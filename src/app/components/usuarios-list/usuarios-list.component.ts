import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/usuario.model';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-usuarios-list',
  templateUrl: './usuarios-list.component.html',
  styleUrls: ['./usuarios-list.component.css']
})
export class UsuariosListComponent implements OnInit {

  usuarios: Usuario[] = [];
  currentUsuario: Usuario = {};
  currentIndex = -1;
  name = '';

  page = 1;
  count = 0;
  pageSize = 3;
  pageSizes = [3, 6, 9];

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.retrieveUsuarios();
 }

  getRequestParams(searchName: string, page: number, pageSize: number): any {
    let params: any = {};

    if (searchName) {
      params[`name`] = searchName;
    }

    if (page) {
      params[`page`] = page - 1;
    }

    if (pageSize) {
      params[`size`] = pageSize;
    }

    return params;
  }

  retrieveUsuarios(): void {
    const params = this.getRequestParams(this.name, this.page, this.pageSize);
    this.usuarioService.getAll(params)
      .subscribe({
        next: (data) => {
          const { usuarios, totalItems } = data;
          this.usuarios = data;
		  this.count = totalItems;
          console.log(data);
        },
        error: (err) => {
          console.log(err);
        }
      });
	  
	  
  }

  handlePageChange(event: number): void {
    this.page = event;
    this.retrieveUsuarios();
  }

  handlePageSizeChange(event: any): void {
    this.pageSize = event.target.value;
    this.page = 1;
    this.retrieveUsuarios();
  }

  refreshList(): void {
    this.retrieveUsuarios();
    this.currentUsuario = {};
    this.currentIndex = -1;
  }

  setActiveUsuario(usuario: Usuario, index: number): void {
    this.currentUsuario = usuario;
    this.currentIndex = index;
  }

  removeAllUsuarios(): void {
    this.usuarioService.deleteAll()
      .subscribe({
        next: res => {
          console.log(res);
          this.refreshList();
        },
        error: err => {
          console.log(err);
        }
      });

  }

  searchName(): void {
    this.page = 1;
    this.retrieveUsuarios();
  }

}