import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FechadaComponent } from './fechada/fechada.component';
import { EmAndamentoComponent } from './em-andamento/em-andamento.component';
import { CanceladaComponent } from './cancelada/cancelada.component';
import { DetalhesComponent } from './detalhes/detalhes.component';

const routes: Routes = [
  { path: '', redirectTo: '/em-andamento', pathMatch: 'full' },
  { path: 'fechada', component: FechadaComponent },
  { path: 'em-andamento', component: EmAndamentoComponent },
  { path: 'cancelada', component: CanceladaComponent },
  { path: 'detalhes/:id', component: DetalhesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
