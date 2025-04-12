import { initFederation } from '@angular-architects/native-federation';

async function bootstrap() {
  try {
    // Carrega os web components antes de inicializar a federação e o bootstrap do app//
    // @ts-ignore
    await import('http://127.0.0.1:4500/polyfills-es5.js'); // se aplicável
    // @ts-ignore
    await import('http://127.0.0.1:4500/main-es5.js');
    console.log('Web Component carregado!');

    // Inicializa federation
    await initFederation('federation.manifest.json');

    // Depois inicializa o Angular
    await import('./bootstrap');
  } catch (err) {
    console.error('Erro ao carregar app ou web component', err);
  }
}

bootstrap();
