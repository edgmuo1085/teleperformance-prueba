import { Routes } from '@angular/router';

export const FULL_ROUTES: Routes = [
    {
        path: 'full',
        loadChildren: () => import('../../pages/full-pages/full-pages.module')
            .then(m => m.FullPagesModule)
    }
]