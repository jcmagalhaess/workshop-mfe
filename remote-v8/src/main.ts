// main.ts (Angular 8)
import { createCustomElement } from '@angular/elements';
import { Injector } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { ChamadaCapitalComponent } from './app/features/chamada-capital/chamada-capital.component';

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .then(moduleRef => {
    const injector = moduleRef.injector;
    const el = createCustomElement(ChamadaCapitalComponent, { injector });
    customElements.define('app-chamada-capital', el);
  });
