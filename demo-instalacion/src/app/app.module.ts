import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { CustomDirectiveDirective } from './directives/custom-directive.directive';
import { AprobadoDirectiveDirective } from './directives/aprobado-directive.directive';
import { ReprobadoDirectiveDirective } from './directives/reprobado-directive.directive';
import { PromocionadoDirectiveDirective } from './directives/promocionado-directive.directive';

@NgModule({
  declarations: [
    AppComponent,
    DirectivesComponent,
    CustomDirectiveDirective,
    AprobadoDirectiveDirective,
    ReprobadoDirectiveDirective,
    PromocionadoDirectiveDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
