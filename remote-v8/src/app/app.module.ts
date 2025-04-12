import { Injector, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ChamadaCapitalComponent } from "./features/chamada-capital/chamada-capital.component";
import { createCustomElement } from "@angular/elements";

@NgModule({
  declarations: [AppComponent, ChamadaCapitalComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  entryComponents: [ChamadaCapitalComponent],
})
export class AppModule {
  // ngDoBootstrap fica vazio: o main.ts e main-wc.ts controlam o bootstrap
  ngDoBootstrap() { }
}
