import { loadRemoteModule } from '@angular-architects/module-federation';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'remote',
    loadChildren: () => loadRemoteModule({
      remoteEntry: 'http://localhost:4201/remoteEntry.js',
      remoteName: 'remote_v12',
      exposedModule: './ChamadaCapital'
    })
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
