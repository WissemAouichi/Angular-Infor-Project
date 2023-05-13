import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from "@angular/core";
import { EChartsOption } from "echarts";
import { SohoPopDownDirective } from "ids-enterprise-ng";
import { ChartData } from "../../models/chart-data";
import { ChartDataGloabal } from "../../models/chart-data-gloabal";
import { AppEchartsService } from "./app-echarts-chat.service";
import PRICE_VARIATION from "../price-variation/Price Variation.json";

@Component({
  selector: "echarts-infor",
  templateUrl: "./app-echarts-price-variation.component.html",
  styleUrls: ["./app-echarts-price-variation.component.scss"],
  providers: [AppEchartsService],
})
export class EchartsInforPriceComponent implements OnInit {
  @ViewChild("chartLegend", { read: SohoPopDownDirective, static: true })
  chartLegend: SohoPopDownDirective;

  @ViewChild("echarts", { static: false }) echartsdiv!: ElementRef;

  // Global
  public chartDataGloabal: ChartDataGloabal;
  public displayChart: boolean = false;
  public chartData: ChartData[];
  private priceData = [
    {
      key: "lblMaxPrice",
      values: [],
      type: "area",
      yAxis: 1,
      color: "#e4e6e8",
      area: true,
      disabled: false,
      showInLegend: false,
      isCSVExport: true,
    },
    {
      key: "lblMinPrice",
      values: [],
      type: "area",
      yAxis: 1,
      color: "#FFFFFF",
      area: true,
      disabled: false,
      showInLegend: false,
      isCSVExport: true,
    },
    {
      key: "lblMaxPriceLine",
      values: [],
      type: "line",
      yAxis: 1,
      color: "#e4e6e8",
      area: false,
      disabled: false,
      showInLegend: false,
      isCSVExport: false,
    },
    {
      key: "lblCurrentPrice",
      values: [],
      type: "line",
      yAxis: 1,
      color: "#0072ED",
      area: false,
      disabled: false,
      showInLegend: false,
      isCSVExport: true,
    },
    {
      key: "lblPriceDecision",
      values: [],
      type: "line",
      yAxis: 1,
      color: "#cd6200",
      area: false,
      disabled: false,
      showInLegend: false,
      isCSVExport: true,
    },
    {
      key: "MCS",
      values: [],
      type: "line",
      yAxis: 1,
      color: "#69B5DD",
      area: false,
      disabled: true,
      showInLegend: true,
      isCSVExport: false,
    },
    {
      key: "MNT",
      values: [],
      type: "line",
      yAxis: 1,
      color: "#D26D6D",
      area: false,
      disabled: true,
      showInLegend: true,
      isCSVExport: false,
    },
    {
      key: "MRC",
      values: [],
      type: "line",
      yAxis: 1,
      color: "#9CCE7C",
      area: false,
      disabled: true,
      showInLegend: true,
      isCSVExport: false,
    },
    {
      key: "NST",
      values: [],
      type: "line",
      yAxis: 1,
      color: "#F4C951",
      area: false,
      disabled: true,
      showInLegend: true,
      isCSVExport: false,
    },
    {
      key: "NVT",
      values: [],
      type: "line",
      yAxis: 1,
      color: "#B59ECA",
      area: false,
      disabled: true,
      showInLegend: true,
      isCSVExport: false,
    },
    {
      key: "PRK",
      values: [],
      type: "line",
      yAxis: 1,
      color: "#7CC0B5",
      area: false,
      disabled: true,
      showInLegend: true,
      isCSVExport: false,
    },
    {
      key: "RYD",
      values: [],
      type: "line",
      yAxis: 1,
      color: "#B59ECA",
      area: false,
      disabled: true,
      showInLegend: true,
      isCSVExport: false,
    },
    {
      key: "HIN",
      values: [],
      type: "line",
      yAxis: 0,
      color: "#6E5282",
      area: false,
      disabled: false,
      showInLegend: true,
      isCSVExport: false,
    },
  ];
  private datestamp = [];
  public initOpts = { locale: "FR" };
  public mergeOption;
  public width = 500;
  public isChartLegendOpen: boolean;
  public currentPath: string;
  public displaymobileversion: boolean;
  public lang: any;
  public innerWidth: number;

  constructor(
    private AppEchartsService: AppEchartsService,
    private host: ElementRef
  ) {}

  ngOnInit() {
    this.innerWidth = window.innerWidth;
    this.initializeChart(PRICE_VARIATION);
  }
  public showDataZoom: boolean;
  initializeChart(chartDataGloabal: ChartDataGloabal) {
    this.innerWidth = window.innerWidth;
    this.innerWidth < 768
      ? (this.showDataZoom = false)
      : (this.showDataZoom = true);
    this.chartDataGloabal = chartDataGloabal;
    this.priceData = chartDataGloabal.chartData;
    this.datestamp = chartDataGloabal.ticks;
    this.displayChart = true;
    this.mergeOption = {
      dataZoom: { show: this.showDataZoom },
      xAxis:[{
        id:"Axe3",
        data:this.datestamp
      }],
      series: [
        { data: this.mapData(0) },
        { data: this.mapData(1) },
        { data: this.mapData(3) },
        { data: this.mapData(4) },
      ],
    };
    this.createChartData();
  }
  ngAfterViewInit() {
    // echarts.registerLocale("FR", langFR);
    // echarts.init(this.echartsdiv.nativeElement, null, {
    //   locale: "FR",
    //   height:400
    // });
    // this.zr=this.echartsdiv.nativeElement.getZr()
  }
  @HostListener("window:resize", ["$event"])
  onResizeWindow(event) {
    this.innerWidth = window.innerWidth;
    this.innerWidth < 768
      ? (this.mergeOption = { dataZoom: { show: false } })
      : (this.mergeOption = { dataZoom: { show: true } });
  }
  chartInitOption: EChartsOption = {
    tooltip: {
      trigger: "axis",
      backgroundColor: "rgb(0,0,0)",
      //   formatter:function(params) {
      //     let res = `${params[0].axisValue}：<br>`
      //     for (let i in params) {
      //         res += `${params[i].marker}${params[i].seriesName}：${params[i].value[1]}<br>`
      //     }
      //     return res;
      // }
    },
    toolbox: {
      feature: {
        dataZoom: {
          yAxisIndex: "none",
        },
        restore: {},
        saveAsImage: {},
      },
    },
    xAxis: [
      {
        type: "time",
        interval:2,
        splitNumber:1,
        axisLabel: {
          formatter: "{MMM}",
          showMinLabel:true,
          showMaxLabel:true
        },
        axisTick:{
          show:true,
        },
        splitLine:{
          show:false,
        },
        minorSplitLine:{
          show:true
        }
      },
      {
        type: "time",
        id: "Axe3",
        boundaryGap: false,
        position: "bottom",
        offset: 50,
        interval:2,
        splitNumber:1,
        axisLabel: {
          formatter: "{Q}",
          showMinLabel:true,
          showMaxLabel:true
        },
        axisTick:{
          show:true,
        },
        splitLine:{
          show:false,
        },
        minorSplitLine:{
          show:true
        },
        data:[]
      },
      {
        type: "time",
        id: "Axe2",
        boundaryGap: false,
        position: "bottom",
        offset: 30,
        interval:200,
        splitNumber:50,
        axisLabel: {
          formatter: "{dd}",
          showMinLabel:true,
          showMaxLabel:true
        },
        axisTick:{
          show:true,
        },
        splitLine:{
          show:false,
        }
      },
    ],
    yAxis: {
      type: "value",
      min: "dataMin",
    },
    grid: { top: 8, left: "5%", right: "5%" },
    dataZoom: {
      type: "slider",
      start: 0,
      end: 10,
      bottom: 0
    },
    series: [
      {
        name: this.priceData[0].key,
        type: "line",
        z: 1,
        color: this.priceData[0].color,
        stack: "yes",
        lineStyle: {
          width: 0,
        },
        areaStyle: {
          color: "#CDCFD0",
        },
        smooth: false,
        symbol: "none",
        data: [],
        emphasis: {
          focus: "none",
          scale: false,
          areaStyle: {
            opacity: 1,
          },
        },
      },
      {
        name: this.priceData[1].key,
        type: "line",
        z: 2,
        xAxisId: "Axe2",
        smooth: false,
        color: "#FFF",
        symbol: "none",
        data: [],
        areaStyle: {
          color: "#B6B8B9",
          // opacity: 1
        },
        emphasis: {
          focus: "none",
          scale: false,
          areaStyle: {
            opacity: 1,
          },
        },
      },
      {
        name: this.priceData[2].key,
        xAxisId: "Axe3",
        type: "line",
        smooth: false,
        showSymbol: false,
        data: [],
      },
      {
        name: this.priceData[3].key,
        type: "line",
        smooth: false,
        showSymbol: false,
        data: [],
      },
      {
        name: this.priceData[4].key,
        type: "line",
        smooth: false,
        showSymbol: false,
        data: [],
      },
      {
        name: this.priceData[5].key,
        type: "line",
        smooth: false,
        showSymbol: false,
        data: [],
      },
      {
        name: this.priceData[6].key,
        type: "line",
        smooth: false,
        showSymbol: false,
        data: [],
      },
      {
        name: this.priceData[7].key,
        type: "line",
        smooth: false,
        showSymbol: false,
        data: [],
      },
      {
        name: this.priceData[8].key,
        type: "line",
        smooth: false,
        showSymbol: false,
        data: [],
      },
      {
        name: this.priceData[9].key,
        type: "line",
        smooth: false,
        showSymbol: false,
        data: [],
      },
      {
        name: this.priceData[10].key,
        type: "line",
        smooth: false,
        showSymbol: false,
        data: [],
      },
      {
        name: this.priceData[11].key,
        type: "line",
        smooth: false,
        showSymbol: false,
        data: [],
      },
    ],
  };

  private mapData(num) {
    let arr = [];
    if (
      this.priceData[num] &&
      this.priceData[num].key !== "lblMaxPriceLine" &&
      this.priceData[num].key !== "lblCapacityN1"
    ) {
      for (let i = 0; i < this.priceData[num].values.length; i++) {
        arr.push([this.datestamp[i], this.priceData[num].values[i].y]);
      }
      return arr;
    } else return null;
  }

  mapData2(num){
    let arr = [];
    if (
      this.priceData[num] &&
      this.priceData[num].key !== "lblMaxPriceLine" &&
      this.priceData[num].key !== "lblCapacityN1"
    ) {
      for (let i = 0; i < this.priceData[num].values.length; i++) {
        arr.push(this.priceData[num].values[i].y);
      }
      return arr;
    } else return null;
  }

  refreshData() {}

  onChartEvent(event: any, type: string) {
    // console.log("chart event:", type, event, event.end);
  }

  /**
   * create Chart Data
   */
  createChartData() {
    this.chartData = Object.assign([], this.chartDataGloabal.chartData);
  }

  /**
   * Event : close the legend
   */
  onCloseLegend() {
    this.isChartLegendOpen = false;
    this.chartLegend.close();
  }

  /**
   * Event : open the legend
   */
  onOpenLegend() {
    this.isChartLegendOpen = true;
  }

  /**
   * show / hide the legend
   */
  showChartDataLegend(chartDataLine: ChartData) {
    chartDataLine.disabled = !chartDataLine.disabled;
  }
}
