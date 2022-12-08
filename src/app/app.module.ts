import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './componentes/main/main.component';
import { ProjetosComponent } from './componentes/projetos/projetos.component';
import { ContatoComponent } from './componentes/contato/contato.component';
import { SobreComponent } from './componentes/sobre/sobre.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    ProjetosComponent,
    ContatoComponent,
    SobreComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
