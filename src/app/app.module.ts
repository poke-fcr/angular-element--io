import { ApplicationRef, DoBootstrap, Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InputOutputComponent } from './input-output/input-output.component';
import { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [
    AppComponent,
    InputOutputComponent
  ],
  imports: [
    BrowserModule
  ],
  entryComponents: [InputOutputComponent],
  providers: [],
  //uncomment below to test this project
  // bootstrap: [AppComponent]
})
export class AppModule implements DoBootstrap {

  constructor(private injector: Injector) { }

  ngDoBootstrap() {
    let element = createCustomElement(InputOutputComponent, { injector: this.injector })
    customElements.define('input-output', element)
  }

}
