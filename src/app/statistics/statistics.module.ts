import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SohoComponentsModule } from 'ids-enterprise-ng';
import { NgxEchartsModule } from 'ngx-echarts';
import { BusyIndicatorDemoBodyComponent } from './occupancy/components/busyindicator/body-sample.demo';
import { DataGridOccupancyComponent } from './occupancy/components/data-grid-occupancy/data-grid-occupancy.component';
import { ExportDataGridComponent } from './occupancy/components/data-grid-occupancy/export-data-grid/export-data-grid.component';
import { EchartsHistoricalComponent } from './occupancy/components/echarts-historical-chart/echarts-historical.component';
import { EchartsLinesComponent } from './occupancy/components/echarts-multiline/echarts-lines.component';
import { EchartsPriceComponent } from './occupancy/components/echarts-price-variation/echarts-price-variation.component';
import { EchartsInforPriceComponent } from './occupancy/components/infor-echarts/app-echarts-chart.component';
import { LineChartOccupancyComponent } from './occupancy/components/line-chart-occupancy/line-chart-occupancy.component';
import { OccupancyForecastComponent } from './occupancy/components/occupancy-forecast/occupancy-forecast.component';
import { OccupancyIssueComponent } from './occupancy/components/occupancy-issue/occupancy-issue.component';
import { PlotlyLineComponent } from './occupancy/components/plotly-line/plotly-line.component';
import { DatePickerComponent } from './occupancy/components/price-variation/datepicker/datepicker.component';
import { PriceVariationComponent } from './occupancy/components/price-variation/price-variation.component';
import { OccupancyComponent } from './occupancy/occupancy.component';
import 'echarts/i18n/langFR'

@NgModule({
  declarations: [
    BusyIndicatorDemoBodyComponent,
    OccupancyComponent,
    DataGridOccupancyComponent,
    LineChartOccupancyComponent,
    ExportDataGridComponent,
    PlotlyLineComponent,
    PriceVariationComponent,
    OccupancyForecastComponent,
    DatePickerComponent,
    EchartsPriceComponent,
    EchartsHistoricalComponent,
    EchartsLinesComponent,
    OccupancyIssueComponent,
    EchartsInforPriceComponent
  ],
  imports: [
    SohoComponentsModule,
    CommonModule,
    FormsModule,
    
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    })
  ]
})
export class StatisticsModule {

}