import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FullPagesRoutingModule } from './full-pages-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PerfilComponent } from './perfil/perfil.component';


@NgModule({
  declarations: [
    DashboardComponent,
    PerfilComponent
  ],
  imports: [
    CommonModule,
    FullPagesRoutingModule
  ]
})
export class FullPagesModule { }
