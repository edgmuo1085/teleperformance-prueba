import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FullPagesRoutingModule } from './full-pages-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PerfilComponent } from './perfil/perfil.component';
import { AdministradorComponent } from './administrador/administrador.component';
import { UsuarioComponent } from './usuario/usuario.component';


@NgModule({
  declarations: [
    DashboardComponent,
    PerfilComponent,
    AdministradorComponent,
    UsuarioComponent
  ],
  imports: [
    CommonModule,
    FullPagesRoutingModule
  ]
})
export class FullPagesModule { }
