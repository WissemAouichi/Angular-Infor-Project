import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SohoComponentsModule } from "ids-enterprise-ng";
import { NgxEchartsModule } from "ngx-echarts";
import { BusyIndicatorDemoBodyComponent } from "./occupancy/components/busyindicator/body-sample.demo";
import { EchartsHistoricalComponent } from "./occupancy/components/echarts-historical-chart/echarts-historical.component";
import { EchartsLinesComponent } from "./occupancy/components/echarts-multiline/echarts-lines.component";
import { EchartsPriceComponent } from "./occupancy/components/echarts-price-variation/echarts-price-variation.component";
import { EchartsInforPriceComponent } from "./occupancy/components/infor-echarts/app-echarts-chart.component";
import { OccupancyIssueComponent } from "./occupancy/components/occupancy-issue/occupancy-issue.component";
import { DatePickerComponent } from "./occupancy/components/price-variation/datepicker/datepicker.component";
import { OccupancyComponent } from "./occupancy/occupancy.component";
import * as echarts from "../statistics/echarts-custom";
import { SpinboxDemoComponent } from "./occupancy/components/spinbox/spinbox.component";
import { TabsBasicDemoComponent } from "./occupancy/components/tabs/tabs.component";
import { TabsDataDrivenDemoComponent } from "./occupancy/components/tabs-list/tabs-list.component";
import { ReportsComponent } from "./occupancy/components/echarts-reports/reports.component";
import { ReportsService } from "./occupancy/components/echarts-reports/reports.service";
// Import the echarts core module, which provides the necessary interfaces for using echarts.
// import * as echarts from 'echarts/core';
// // Import bar charts, all with Chart suffix
// import { BarChart,LineChart } from 'echarts/charts';
// import { TitleComponent, TooltipComponent, GridComponent, DataZoomComponent } from 'echarts/components';
// // Import the Canvas renderer, note that introducing the CanvasRenderer or SVGRenderer is a required step
// import { CanvasRenderer } from 'echarts/renderers';
// import 'echarts/theme/macarons.js';
import { registerLocale } from "echarts/lib/core/locale";
import langFR from "echarts/lib/i18n/langFR"

// echarts.use([TitleComponent, TooltipComponent, GridComponent, BarChart, LineChart, DataZoomComponent, CanvasRenderer]);
registerLocale('FR',langFR)

@NgModule({
  declarations: [
    ReportsComponent,
    TabsDataDrivenDemoComponent,
    TabsBasicDemoComponent,
    SpinboxDemoComponent,
    BusyIndicatorDemoBodyComponent,
    OccupancyComponent,
    DatePickerComponent,
    EchartsPriceComponent,
    EchartsHistoricalComponent,
    EchartsLinesComponent,
    OccupancyIssueComponent,
    EchartsInforPriceComponent,
  ],
  imports: [
    SohoComponentsModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxEchartsModule.forRoot({ echarts }),
  ],
  providers: [ReportsService],
})
export class StatisticsModule {}