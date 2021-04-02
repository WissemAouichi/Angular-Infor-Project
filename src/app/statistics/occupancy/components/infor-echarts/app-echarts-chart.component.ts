import { AfterViewInit, Component, Inject, OnInit, ViewChild } from "@angular/core";
import { L10nLocale, L10nTranslationService, L10N_LOCALE } from "angular-l10n";
import { EChartsOption } from "echarts";
import { SohoPopDownDirective } from "ids-enterprise-ng";
import { setTimeout } from "timers";
import { ChartData } from "../../models/chart-data";
import { ChartDataGloabal } from "../../models/chart-data-gloabal";
import { AppEchartsService } from "./app-echarts-chat.service";
import PRICE_VARIATION from '../price-variation/Price Variation.json'

@Component({
	selector: 'echarts-price',
	templateUrl: './app-echarts-price-variation.component.html',
	styleUrls: ['./app-echarts-price-variation.component.scss'],
	providers: [AppEchartsService]
})

export class EchartsPriceComponent implements OnInit {
	public chartDataGloabal: ChartDataGloabal;
	public displayChart: boolean=false
	public chartData: ChartData[];
	private priceData = [
		{
			"key": "lblMaxPrice",
			"values": [],
			"type": "area",
			"yAxis": 1,
			"color": "#e4e6e8",
			"area": true,
			"order": 0,
			"toolTipOrder": 2,
			"comment": "no comment",
			"formula": {
				"nullIfNegative": false,
				"expressionString": null,
				"mainArgument": null
			},
			"disabled": false,
			"showInLegend": false,
			"isCSVExport": true
		},
		{
			"key": "lblMinPrice",
			"values": [],
			"type": "area",
			"yAxis": 1,
			"color": "#FFFFFF",
			"area": true,
			"order": 1,
			"toolTipOrder": 3,
			"comment": "no comment",
			"formula": {
				"nullIfNegative": false,
				"expressionString": null,
				"mainArgument": null
			},
			"disabled": false,
			"showInLegend": false,
			"isCSVExport": true
		},
		{
			"key": "lblMaxPriceLine",
			"values": [],
			"type": "line",
			"yAxis": 1,
			"color": "#e4e6e8",
			"area": false,
			"order": 2,
			"toolTipOrder": -1,
			"comment": "no comment",
			"formula": {
				"nullIfNegative": false,
				"expressionString": null,
				"mainArgument": null
			},
			"disabled": false,
			"showInLegend": false,
			"isCSVExport": false
		},
		{
			"key": "lblCurrentPrice",
			"values": [],
			"type": "line",
			"yAxis": 1,
			"color": "#0072ED",
			"area": false,
			"order": 3,
			"toolTipOrder": 0,
			"comment": "no comment",
			"formula": {
				"nullIfNegative": false,
				"expressionString": null,
				"mainArgument": null
			},
			"disabled": false,
			"showInLegend": false,
			"isCSVExport": true
		},
		{
			"key": "lblPriceDecision",
			"values": [],
			"type": "line",
			"yAxis": 1,
			"color": "#cd6200",
			"area": false,
			"order": 4,
			"toolTipOrder": 1,
			"comment": "no comment",
			"formula": {
				"nullIfNegative": false,
				"expressionString": null,
				"mainArgument": null
			},
			"disabled": false,
			"showInLegend": false,
			"isCSVExport": true
		},
		{
			"key": "MCS",
			"values": [],
			"type": "line",
			"yAxis": 1,
			"color": "#69B5DD",
			"area": false,
			"order": 5,
			"toolTipOrder": 4,
			"comment": "no comment",
			"formula": {
				"nullIfNegative": false,
				"expressionString": null,
				"mainArgument": null
			},
			"disabled": true,
			"showInLegend": true,
			"isCSVExport": false
		},
		{
			"key": "MNT",
			"values": [],
			"type": "line",
			"yAxis": 1,
			"color": "#D26D6D",
			"area": false,
			"order": 6,
			"toolTipOrder": 5,
			"comment": "no comment",
			"formula": {
				"nullIfNegative": false,
				"expressionString": null,
				"mainArgument": null
			},
			"disabled": true,
			"showInLegend": true,
			"isCSVExport": false
		},
		{
			"key": "MRC",
			"values": [],
			"type": "line",
			"yAxis": 1,
			"color": "#9CCE7C",
			"area": false,
			"order": 7,
			"toolTipOrder": 6,
			"comment": "no comment",
			"formula": {
				"nullIfNegative": false,
				"expressionString": null,
				"mainArgument": null
			},
			"disabled": true,
			"showInLegend": true,
			"isCSVExport": false
		},
		{
			"key": "NST",
			"values": [],
			"type": "line",
			"yAxis": 1,
			"color": "#F4C951",
			"area": false,
			"order": 8,
			"toolTipOrder": 7,
			"comment": "no comment",
			"formula": {
				"nullIfNegative": false,
				"expressionString": null,
				"mainArgument": null
			},
			"disabled": true,
			"showInLegend": true,
			"isCSVExport": false
		},
		{
			"key": "NVT",
			"values": [],
			"type": "line",
			"yAxis": 1,
			"color": "#B59ECA",
			"area": false,
			"order": 9,
			"toolTipOrder": 8,
			"comment": "no comment",
			"formula": {
				"nullIfNegative": false,
				"expressionString": null,
				"mainArgument": null
			},
			"disabled": true,
			"showInLegend": true,
			"isCSVExport": false
		},
		{
			"key": "PRK",
			"values": [],
			"type": "line",
			"yAxis": 1,
			"color": "#7CC0B5",
			"area": false,
			"order": 10,
			"toolTipOrder": 9,
			"comment": "no comment",
			"formula": {
				"nullIfNegative": false,
				"expressionString": null,
				"mainArgument": null
			},
			"disabled": true,
			"showInLegend": true,
			"isCSVExport": false
		},
		{
			"key": "RYD",
			"values": [],
			"type": "line",
			"yAxis": 1,
			"color": "#B59ECA",
			"area": false,
			"order": 11,
			"toolTipOrder": 10,
			"comment": "no comment",
			"formula": {
				"nullIfNegative": false,
				"expressionString": null,
				"mainArgument": null
			},
			"disabled": true,
			"showInLegend": true,
			"isCSVExport": false
		},
		{
			"key": "HIN",
			"values": [],
			"type": "line",
			"yAxis": 0,
			"color": "#6E5282",
			"area": false,
			"order": 13,
			"toolTipOrder": 13,
			"comment": "no comment",
			"formula": {
				"nullIfNegative": false,
				"expressionString": null,
				"mainArgument": null
			},
			"disabled": false,
			"showInLegend": true,
			"isCSVExport": false
		}
	]
	private datestamp
	public initOpts = { height: '300px' };
	mergeOption

	// Global
	@ViewChild('chartLegend', { read: SohoPopDownDirective, static:true })
	chartLegend: SohoPopDownDirective;
	public isChartLegendOpen: boolean;
	public currentPath: string;

	constructor(@Inject(L10N_LOCALE) public locale: L10nLocale,
		private AppEchartsService: AppEchartsService, 
		private translationService: L10nTranslationService) { }

	ngOnInit() {
		/*setTimeout(() => {
			this.mergeOption={ series: [{ name: "Max Price", data:this.data },{name:"Min Price", data:this.data }] }
		}, 20000);*/
		this.initializeChart(PRICE_VARIATION)
	}

	initializeChart(chartDataGloabal: ChartDataGloabal) {
		this.chartDataGloabal = chartDataGloabal;
		this.priceData = chartDataGloabal.chartData;
		this.datestamp = chartDataGloabal.ticks
		this.displayChart = true
		this.mergeOption = { series: [{ data: this.maplblPriceDecision() }, { data: this.maplblMaxPrice() }, { data: this.maplblMinPrice() }, { data: this.maplblCurrentPrice() }] }
		this.createChartData();
		console.log('This ChartDataGlobal,this PriceData', chartDataGloabal, this.priceData)
	}

	chartInitOption: EChartsOption = {
		tooltip: {
			trigger: 'axis',
			backgroundColor: 'rgb(0,0,0)'
		},
		toolbox: {
			feature: {
				dataZoom: {
					yAxisIndex: 'none'
				},
				restore: {},
				saveAsImage: {}
			}
		},
		xAxis: {
			type: 'time',

			boundaryGap: false
		},
		yAxis: {
			type: 'value',
			min: 'dataMin'
		},
		grid: { top: 8, left: '5%', right: '5%' },
		dataZoom: [{
			type: 'inside',
			start: 0,
			end: 10
		}, {
			start: 0,
			end: 10
		}],
		series: [
			{
				name: this.translationService.translate(this.priceData[0].key, null,
					this.locale.language),
				type: 'line',
				z: 1,
				color: '#C6C6C6',
				stack: "yes",
				lineStyle: {
					width: 0,
				},
				areaStyle: {
					color: '#C6C6C6',
				},
				smooth: false,
				symbol: 'none',
				data: []
			},
			{
				name: this.translationService.translate(this.priceData[1].key, null,
					this.locale.language),
				type: 'line',
				z: 2,
				smooth: false,
				color: "#FFF",
				symbol: 'none',
				data: [],
				areaStyle: {
					color: "#FFF",
					opacity: 1
				}
			},
			{
				name: this.translationService.translate(this.priceData[2].key, null,
					this.locale.language),
				type: 'line',
				smooth: false,
				showSymbol: false,
				data: []
			},
			{
				name: this.translationService.translate(this.priceData[3].key, null,
					this.locale.language),
				type: 'line',
				smooth: false,
				showSymbol: false,
				data: []
			},
			{
				name: this.priceData[4].key,
				type: 'line',
				smooth: false,
				showSymbol: false,
				data: []
			},
			{
				name: this.priceData[5].key,
				type: 'line',
				smooth: false,
				showSymbol: false,
				data: []
			},
			{
				name: this.priceData[6].key,
				type: 'line',
				smooth: false,
				showSymbol: false,
				data: []
			},
			{
				name: this.priceData[7].key,
				type: 'line',
				smooth: false,
				showSymbol: false,
				data: []
			},
			{
				name: this.priceData[8].key,
				type: 'line',
				smooth: false,
				showSymbol: false,
				data: []
			},
			{
				name: this.priceData[9].key,
				type: 'line',
				smooth: false,
				showSymbol: false,
				data: []
			},
			{
				name: this.priceData[10].key,
				type: 'line',
				smooth: false,
				showSymbol: false,
				data: []
			},
			{
				name: this.priceData[11].key,
				type: 'line',
				smooth: false,
				showSymbol: false,
				data: []
			},
		]
	};
	private maplblMaxPrice() {
		let arr = [];
		for (let i = 0; i < this.priceData[0].values.length; i++) {
			arr.push([this.datestamp[i], this.priceData[0].values[i].y])
		}
		return (arr);
	}
	private maplblMinPrice() {
		let arr = [];
		for (let i = 0; i < this.priceData[1].values.length; i++) {
			arr.push([this.datestamp[i], this.priceData[1].values[i].y])
		}
		return (arr);
	}
	private maplblCurrentPrice() {
		let arr = [];
		for (let i = 0; i < this.priceData[3].values.length; i++) {
			arr.push([this.datestamp[i], this.priceData[3].values[i].y])
		}
		return (arr);
	}
	private maplblPriceDecision() {
		let arr = [];
		for (let i = 0; i < this.priceData[4].values.length; i++) {
			arr.push([this.datestamp[i], this.priceData[4].values[i].y])
		}
		return (arr);
	}

	refreshData() { }

	onChartEvent(event: any, type: string) {
		console.log('chart event:', type, event, event.end);
		console.log(this.datestamp[Math.round(event.end * (this.datestamp.length - 1) / 100)])
		console.log(this.chartDataGloabal)
	}

	/**
   	* create Chart Data
   	*/
	   createChartData() {
		this.chartData = Object.assign([], this.chartDataGloabal.chartData);
		/*this.displaychartData.emit({
		  chartData: this.chartData,
		  chartDataGloabal: this.chartDataGloabal,
		});*/
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