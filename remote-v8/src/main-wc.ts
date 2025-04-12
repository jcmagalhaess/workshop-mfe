import { createCustomElement } from '@angular/elements';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { ChamadaCapitalComponent } from './app/features/chamada-capital/chamada-capital.component';

platformBrowserDynamic().bootstrapModule(AppModule)
  .then(moduleRef => {
    const injector = moduleRef.injector;
    const el = createCustomElement(ChamadaCapitalComponent, { injector });
    customElements.define('app-chamada-capital', el);
  })
  .catch(err => console.error(err));
