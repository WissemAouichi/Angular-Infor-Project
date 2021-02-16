import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SohoComponentsModule } from 'ids-enterprise-ng';
import { DataGridOccupancyComponent } from './occupancy/components/data-grid-occupancy/data-grid-occupancy.component';
import { ExportDataGridComponent } from './occupancy/components/data-grid-occupancy/export-data-grid/export-data-grid.component';
import { LineChartOccupancyComponent } from './occupancy/components/line-chart-occupancy/line-chart-occupancy.component';
import { OccupancyComponent } from './occupancy/occupancy.component';

@NgModule({
  declarations: [
    OccupancyComponent,
    DataGridOccupancyComponent,
    LineChartOccupancyComponent,
    ExportDataGridComponent,
  ],
  imports: [SohoComponentsModule, CommonModule]
})
export class StatisticsModule {

}
