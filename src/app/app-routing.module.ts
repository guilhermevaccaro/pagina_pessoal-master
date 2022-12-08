import { ProjetosComponent } from './componentes/projetos/projetos.component';
import { ContatoComponent } from './componentes/contato/contato.component';
import { MainComponent } from './componentes/main/main.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SobreComponent } from './componentes/sobre/sobre.component';

const routes: Routes = [
  { path: '', component: MainComponent},
  { path: 'sobre', component: SobreComponent},
  { path: 'contato', component: ContatoComponent},
  { path: 'projetos', component: ProjetosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
