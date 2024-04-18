import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuariosListComponent } from './components/usuarios-list/usuarios-list.component';
import { UsuarioDetailsComponent } from './components/usuario-details/usuario-details.component';
import { AddUsuarioComponent } from './components/add-usuario/add-usuario.component';

const routes: Routes = [
  { path: '', redirectTo: 'usuarios', pathMatch: 'full' },
  { path: 'usuarios', component: UsuariosListComponent },
  { path: 'usuarios/:id', component:UsuarioDetailsComponent },
  { path: 'add', component: AddUsuarioComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
