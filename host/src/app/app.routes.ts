import { Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/native-federation';

export const routes: Routes = [
    {
        path: '', redirectTo: 'tesouraria', pathMatch: 'full'
    },
    {
        path: 'tesouraria',
        loadComponent: () => loadRemoteModule('remote-v19', './Tesouraria').then(c => c.TesourariaComponent)
    },
    {
        path: 'contabilidade',
        loadComponent: () => loadRemoteModule('remote-v19', './Contabilidade').then(c => c.ContabilidadeComponent)
    },
    {
        path: 'chamada-capital',
        loadChildren: () => loadRemoteModule('remoteV14', './ChamadaCapital').then(c => c.ChamadaCapitalModule)

    }
];
