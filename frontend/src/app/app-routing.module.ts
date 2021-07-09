import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentLayoutComponent } from './layout/content/content-layout.component';
import { FullLayoutComponent } from './layout/full/full-layout.component';
import { CONTENT_ROUTES } from './shared/routes/content-layout.routes';
import { FULL_ROUTES } from './shared/routes/full-layout.routes';

const routes: Routes = [
	{
		path: '',
		redirectTo: 'pages/login',
		pathMatch: 'full',
	},
	{ path: '', component: FullLayoutComponent, data: { title: 'full Views' }, children: FULL_ROUTES },
	{ path: '', component: ContentLayoutComponent, data: { title: 'content Views' }, children: CONTENT_ROUTES }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
