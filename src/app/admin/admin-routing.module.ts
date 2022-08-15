import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from './guards/admin.guard';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ClientesCadastroComponent } from './components/clientes-cadastro/clientes-cadastro.component';
import { ClientesConsultaComponent } from './components/clientes-consulta/clientes-consulta.component';
import { ClientesEdicaoComponent } from './components/clientes-edicao/clientes-edicao.component';

const routes: Routes = [
  {
    path: 'admin/dashboard', //rota
    component: DashboardComponent,
    canActivate: [AdminGuard]
  },
  {
    path: 'admin/clientes-cadastro', //rota
    component: ClientesCadastroComponent,
    canActivate: [AdminGuard]
  },
  {
    path: 'admin/clientes-consulta', //rota
    component: ClientesConsultaComponent,
    canActivate: [AdminGuard]
  },
  {
    path: 'admin/clientes-edicao/:id', //rota
    component: ClientesEdicaoComponent,
    canActivate: [AdminGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
