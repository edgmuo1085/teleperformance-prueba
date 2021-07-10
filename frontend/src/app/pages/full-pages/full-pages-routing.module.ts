import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PerfilComponent } from './perfil/perfil.component';
import { AdministradorComponent } from './administrador/administrador.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { RolesGuard } from 'src/app/shared/auth/roles.guard';


const routes: Routes = [
	{ path: 'dashboard', component: DashboardComponent },
	{ path: 'perfil', component: PerfilComponent },
	{
		path: 'admin', component: AdministradorComponent, canActivate: [RolesGuard],
		data: {
			role: 'ROLE_ADMIN'
		}
	},
	{
		path: 'usuario', component: UsuarioComponent, canActivate: [RolesGuard],
		data: {
			role: 'ROLE_USER'
		}
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class FullPagesRoutingModule { }
