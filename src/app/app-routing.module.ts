import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriarPensamentoComponent } from './componentes/pensamentos/criar-pensamento/criar-pensamento.component';
import { ListarPensamentosComponent } from './componentes/pensamentos/listar-pensamentos/listar-pensamentos.component';

const routes: Routes = [{
  path: 'criarPensamento',
  component: CriarPensamentoComponent
},{
  path: 'listarPensamento',
  component: ListarPensamentosComponent
},{
  path: '',
  redirectTo: 'listarPensamento',
  pathMatch: 'full'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
