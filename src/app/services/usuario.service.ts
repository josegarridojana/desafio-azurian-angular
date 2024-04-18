import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario.model';

//const baseUrl = 'http://localhost:8088/desafio-azurian/usuarios';
const baseUrl = 'desafio-azurian/usuarios';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  constructor(private http: HttpClient) {}

  getAll(params: any): Observable<any> {
    return this.http.get<any>(baseUrl, { params });
  }
  
   getAll2(): Observable<any> {
    return this.http.get<any>(baseUrl);
  }

  get(id: any): Observable<Usuario> {
    return this.http.get<Usuario>(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByName(title: any): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${baseUrl}?title=${title}`);
  }
}
