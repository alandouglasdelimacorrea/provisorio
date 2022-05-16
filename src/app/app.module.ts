import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpresasComponent } from './empresas/empresas.component';
import { VagasComponent } from './vagas/vagas.component';

@NgModule({
  declarations: [
    AppComponent,
    EmpresasComponent,
    VagasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
