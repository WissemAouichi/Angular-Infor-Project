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
import * as echarts from "echarts/index";

@Component({
  selector: "echarts-infor",
  templateUrl: "./app-echarts-price-variation.component.html",
  styleUrls: ["./app-echarts-price-variation.component.scss"],
  providers: [AppEchartsService],
})
export class EchartsInforPriceComponent implements OnInit {
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
      order: 0,
      toolTipOrder: 2,
      comment: "no comment",
      formula: {
        nullIfNegative: false,
        expressionString: null,
        mainArgument: null,
      },
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
      order: 1,
      toolTipOrder: 3,
      comment: "no comment",
      formula: {
        nullIfNegative: false,
        expressionString: null,
        mainArgument: null,
      },
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
      order: 2,
      toolTipOrder: -1,
      comment: "no comment",
      formula: {
        nullIfNegative: false,
        expressionString: null,
        mainArgument: null,
      },
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
      order: 3,
      toolTipOrder: 0,
      comment: "no comment",
      formula: {
        nullIfNegative: false,
        expressionString: null,
        mainArgument: null,
      },
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
      order: 4,
      toolTipOrder: 1,
      comment: "no comment",
      formula: {
        nullIfNegative: false,
        expressionString: null,
        mainArgument: null,
      },
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
      order: 5,
      toolTipOrder: 4,
      comment: "no comment",
      formula: {
        nullIfNegative: false,
        expressionString: null,
        mainArgument: null,
      },
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
      order: 6,
      toolTipOrder: 5,
      comment: "no comment",
      formula: {
        nullIfNegative: false,
        expressionString: null,
        mainArgument: null,
      },
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
      order: 7,
      toolTipOrder: 6,
      comment: "no comment",
      formula: {
        nullIfNegative: false,
        expressionString: null,
        mainArgument: null,
      },
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
      order: 8,
      toolTipOrder: 7,
      comment: "no comment",
      formula: {
        nullIfNegative: false,
        expressionString: null,
        mainArgument: null,
      },
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
      order: 9,
      toolTipOrder: 8,
      comment: "no comment",
      formula: {
        nullIfNegative: false,
        expressionString: null,
        mainArgument: null,
      },
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
      order: 10,
      toolTipOrder: 9,
      comment: "no comment",
      formula: {
        nullIfNegative: false,
        expressionString: null,
        mainArgument: null,
      },
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
      order: 11,
      toolTipOrder: 10,
      comment: "no comment",
      formula: {
        nullIfNegative: false,
        expressionString: null,
        mainArgument: null,
      },
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
      order: 13,
      toolTipOrder: 13,
      comment: "no comment",
      formula: {
        nullIfNegative: false,
        expressionString: null,
        mainArgument: null,
      },
      disabled: false,
      showInLegend: true,
      isCSVExport: false,
    },
  ];
  private datestamp = [];
  public initOpts = { height: "300px" };
  mergeOption;

  // Global
  @ViewChild("chartLegend", { read: SohoPopDownDirective, static: true })
  chartLegend: SohoPopDownDirective;
  public isChartLegendOpen: boolean;
  public currentPath: string;
  @ViewChild("echarts", { static: false }) echartsdiv!: ElementRef;
  displaymobileversion: boolean;
  constructor(private AppEchartsService: AppEchartsService) {}
  public lang: any;
  innerWidth: number;
  ngOnInit() {
    /*setTimeout(() => {
			this.mergeOption={ series: [{ name: "Max Price", data:this.data },{name:"Min Price", data:this.data }] }
		}, 20000);*/
    this.lang = {
      time: {
        month: [
          "Janvier",
          "Février",
          "Mars",
          "Avril",
          "Mai",
          "Juin",
          "Juillet",
          "Août",
          "Septembre",
          "Octobre",
          "Novembre",
          "Décembre",
        ],
        monthAbbr: [
          "Janv.",
          "Févr",
          "Mars",
          "Avr",
          "Mai",
          "Juin",
          "Juill",
          "Août",
          "Sept",
          "Oct",
          "Nov",
          "Déc",
        ],
        dayOfWeek: [
          "Dimanche",
          "Lundi",
          "Mardi",
          "Mercredi",
          "Jeudi",
          "Vendredi",
          "Samedi",
        ],
        dayOfWeekAbbr: ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"],
      },
      legend: {
        selector: {
          all: "Tout",
          inverse: "Inverse",
        },
      },
      toolbox: {
        brush: {
          title: {
            rect: "Sélection de boîte",
            polygon: "Sélection au Lasso",
            lineX: "Sélectionner horizontalement",
            lineY: "Sélectionner verticalement",
            keep: "Garder la sélection",
            clear: "Effacer la sélection",
          },
        },
        dataView: {
          title: "Visualisation des données",
          lang: ["Visualisation des données", "Fermer", "Rafraîchir"],
        },
        dataZoom: {
          title: {
            zoom: "Zoom",
            back: "Zoom Reset",
          },
        },
        magicType: {
          title: {
            line: "Changer à Ligne",
            bar: "Changer à Histogramme",
            stack: "Superposition",
            tiled: "Tuile",
          },
        },
        restore: {
          title: "Restaurer",
        },
        saveAsImage: {
          title: "Sauvegarde l'image",
          lang: ["Clic droit pour sauvegarde L'image"],
        },
      },
      series: {
        typeNames: {
          pie: "Circulaire",
          bar: "Histogramme",
          line: "Linéaire",
          scatter: "Nuage de points",
          effectScatter: "Ripple scatter plot",
          radar: "Radar",
          tree: "Arborescent",
          treemap: "Treemap",
          boxplot: "Boîte à moustaches",
          candlestick: "Chandelier",
          k: "Linéaire K",
          heatmap: "Carte de chaleur",
          map: "Carte",
          parallel: "Carte de coordonnées parallèles",
          lines: "Line graph",
          graph: "Relations",
          sankey: "Sankey",
          funnel: "Entonnoir",
          gauge: "Jauge",
          pictorialBar: "Pictorial bar",
          themeRiver: "Theme River Map",
          sunburst: "Sunburst",
        },
      },
      aria: {
        general: {
          withTitle: 'Cette carte est pour "{title}"',
          withoutTitle: "Elle est une carte",
        },
        series: {
          single: {
            prefix: "",
            withName:
              " Avec le type de {seriesType} qui s'appelle {seriesName}.",
            withoutName: " Avec le type de {seriesType}.",
          },
          multiple: {
            prefix: ". Elle comprend {seriesCount} série.",
            withName:
              " La série {seriesId} représente {seriesName} de {seriesType}.",
            withoutName: " La série {seriesId} est un/une {seriesType}.",
            separator: {
              middle: "",
              end: "",
            },
          },
        },
        data: {
          allData: "Les données sont: ",
          partialData: "Le premier {displayCnt} items are: ",
          withName: "Les données pour {name} sont {value}",
          withoutName: "{value}",
          separator: {
            middle: ", ",
            end: ". ",
          },
        },
      },
    };
    this.innerWidth = window.innerWidth;
    this.initializeChart(PRICE_VARIATION);
  }
public showDataZoom:boolean
  initializeChart(chartDataGloabal: ChartDataGloabal) {
    // console.log(this.echartsdiv)
    this.innerWidth = window.innerWidth;
    this.innerWidth < 768 ? (this.showDataZoom=false): this.showDataZoom=true
    this.chartDataGloabal = chartDataGloabal;
    this.priceData = chartDataGloabal.chartData;
    this.datestamp = chartDataGloabal.ticks;
    this.displayChart = true;
    this
    this.mergeOption = {
      dataZoom:{show:this.showDataZoom},
      series: [
        { data: this.mapData(0) },
        { data: this.mapData(1) },
        { data: this.mapData(3) },
        { data: this.mapData(4) },
      ],
    };
    this.createChartData();
    console.log(
      "This ChartDataGlobal,this PriceData",
      chartDataGloabal,
      this.datestamp
    );
  }
  ngAfterViewInit() {
    console.log(this.echartsdiv);
    echarts.registerLocale("FR", this.lang);
    echarts.init(this.echartsdiv.nativeElement, null, {
      locale: "FR",
    });
  }
  @HostListener('window:resize', ['$event'])
  onResizeWindow(event) {
    this.innerWidth = window.innerWidth;
    this.innerWidth < 768
      ? (this.mergeOption={dataZoom:{show:false}})
      : this.mergeOption={dataZoom:{show:true}};
  }  
  chartInitOption: EChartsOption = {
    tooltip: {
      trigger: "axis",
      backgroundColor: "rgb(0,0,0)",
      formatter:function(params) {
        let res = `${params[0].axisValue}：<br>`
        for (let i in params) {
            res += `${params[i].marker}${params[i].seriesName}：${params[i].value[1]}<br>`
        }
        return res;
    }

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
    xAxis: [{
      type: "time",
      boundaryGap: false,
    },
    {
      type: "time",
      boundaryGap: false,
      position:'bottom',
      offset:30
    }],
    yAxis: {
      type: "value",
      min: "dataMin",
    },
    grid: { top: 8, left: "5%", right: "5%" },
    dataZoom: 
      {
        type: "slider",
        start: 0,
        end: 10,
      }
    ,
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
		if (this.priceData[num] && this.priceData[num].key !== "lblMaxPriceLine" && this.priceData[num].key !== "lblCapacityN1") {
			for (let i = 0; i < this.priceData[num].values.length; i++) {
				arr.push([this.datestamp[i], this.priceData[num].values[i].y])
			}
			return (arr);
		}
		else return null;
	}

  refreshData() {}

  onChartEvent(event: any, type: string) {
    console.log("chart event:", type, event, event.end);
    console.log(
      this.datestamp[
        Math.round((event.end * (this.datestamp.length - 1)) / 100)
      ]
    );
    console.log(this.chartDataGloabal);
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
