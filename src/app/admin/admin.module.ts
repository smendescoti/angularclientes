import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartModule } from 'angular-highcharts';
import { AdminGuard } from './guards/admin.guard';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule, IConfig } from 'ngx-mask';

export const options: Partial<IConfig | null> | (() => Partial<IConfig>) = null;

import { AdminRoutingModule } from './admin-routing.module';
import { AdminMaterialModule } from './admin-material.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ClientesCadastroComponent } from './components/clientes-cadastro/clientes-cadastro.component';
import { ClientesConsultaComponent } from './components/clientes-consulta/clientes-consulta.component';
import { ClientesEdicaoComponent } from './components/clientes-edicao/clientes-edicao.component';

@NgModule({
  declarations: [
    DashboardComponent,
    ClientesCadastroComponent,
    ClientesConsultaComponent,
    ClientesEdicaoComponent
  ],
  imports: [
    CommonModule,
    ChartModule,
    AdminRoutingModule,
    AdminMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(),
  ],
  providers: [
    AdminGuard
  ]
})
export class AdminModule { }
