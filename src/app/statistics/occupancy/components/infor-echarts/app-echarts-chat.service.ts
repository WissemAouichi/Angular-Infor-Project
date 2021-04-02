import { Injectable } from "@angular/core";

@Injectable()
export class AppEchartsService {
    constructor() { }

    createChartDetails(chartData) {
        let priceData = chartData.chartData;
		let datestamp = chartData.ticks
        let chartOption = {
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
                    name: 'Price Decision',
                    data: this.maplblPriceDecision(priceData,datestamp)
                },
                {
                    name: 'Max Price',
                    data: this.maplblMaxPrice(priceData,datestamp)
                },
                {
                    name: 'Min Price',
                    data: this.maplblMinPrice(priceData,datestamp)
                },
                {
                    name: 'Current Price',
                    data: this.maplblCurrentPrice(priceData,datestamp)
                },
            ]
        };
        return chartOption
    }

    private maplblMaxPrice(priceData,datestamp) {
        let arr = [];
        for (let i = 0; i < priceData[0].values.length; i++) {
            arr.push([datestamp[i], priceData[0].values[i].y])
        }
        return (arr);
    }
    private maplblMinPrice(priceData,datestamp) {
        let arr = [];
        for (let i = 0; i < priceData[1].values.length; i++) {
            arr.push([datestamp[i], priceData[1].values[i].y])
        }
        return (arr);
    }
    private maplblCurrentPrice(priceData,datestamp) {
        let arr = [];
        for (let i = 0; i < priceData[3].values.length; i++) {
            arr.push([datestamp[i], priceData[3].values[i].y])
        }
        return (arr);
    }
    private maplblPriceDecision(priceData,datestamp) {
        let arr = [];
        for (let i = 0; i < priceData[4].values.length; i++) {
            arr.push([datestamp[i], priceData[4].values[i].y])
        }
        return (arr);
    }

}