import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { DashboardService } from '../../services/dashboard.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  graficoTipos: Chart = new Chart();
  graficoPeriodos: Chart = new Chart();

  constructor(
    private dashboardService: DashboardService,
    private spinnerService: NgxSpinnerService
  ) { }

  ngOnInit(): void {
    this.initGraficoTipos();
    this.initGraficoPeriodos();
  }

  initGraficoTipos(): void {
    this.spinnerService.show();
    this.dashboardService.getGraficoTipos()
      .then((data) => {
        this.graficoTipos = new Chart({
          chart: {
            type: 'pie'
          },
          plotOptions: {
            pie: {
              innerSize: '60%'
            }
          },
          title: {
            text: 'Gráfico Tipos'
          },
          subtitle: {
            text: 'Treinamento Angular / COTI Informática'
          },
          series: [
            { data: data, type: undefined as any }
          ],
          yAxis: {
            title: {
              text: 'Valores'
            }
          },
          legend: {
            enabled: false
          },
          credits: {
            enabled: false
          }
        });
      })
      .catch((e) => {
        console.log(e);
      })
      .finally(() => {
        this.spinnerService.hide();
      })
  }

  initGraficoPeriodos(): void {
    this.spinnerService.show();
    this.dashboardService.getGraficoPeriodos()
      .then((data) => {
        this.graficoPeriodos = new Chart({
          chart: {
            type: 'line'
          },
          title: {
            text: 'Gráfico Períodos'
          },
          subtitle: {
            text: 'Treinamento Angular / COTI Informática'
          },
          series: [
            { data: data, type: undefined as any }
          ],
          xAxis: {
            title: {
              text: 'Períodos'
            }
          },
          yAxis: {
            title: {
              text: 'Valores'
            }
          },
          legend: {
            enabled: false
          },
          credits: {
            enabled: false
          }
        });
      })
      .catch((e) => {
        console.log(e);
      })
      .finally(() => {
        this.spinnerService.hide();
      })
  }

}
