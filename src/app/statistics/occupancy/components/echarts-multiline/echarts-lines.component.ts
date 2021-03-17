import { Component } from "@angular/core";
import { EChartsOption } from "echarts";
import HISTORICAL_DATA from '../echarts-multiline/Historical data.json'

@Component({
    selector: 'echarts-lines',
    template: `<div class="row top-padding">
    <div echarts [options]="chartOption" class="demo-chart"></div>
    </div>`
})

export class EchartsLinesComponent {
    historicaldata = HISTORICAL_DATA.chartData;
    chartOption: EChartsOption = {
        tooltip: {
            trigger: 'axis',
            backgroundColor: 'rgb(0,0,0)'
        },

        title: {
            left: 'left',
            text: 'Historical chart',
        },
        toolbox: {
            show: true,
            feature: {
                dataZoom: {
                    yAxisIndex: 'none'
                },
                dataView: {readOnly: false},
                magicType: {type: ['line', 'bar']},
                restore: {},
                saveAsImage: {}
            }
        },
        xAxis: {
            type: 'category',
            data: this.xAxisData(),
            boundaryGap: false,
            inverse: false,
            axisTick: {
                show: false,
            },
            
        },
        yAxis: {
            type: 'value',
            min: 'dataMin',
            position: 'right',
            axisLine: {
                show: true,
            },
            splitLine: {
                show: false
            }
        },
        dataZoom: [{
            type: 'inside',
            start: 90,
            end: 100
        }, {
            start: 90,
            end: 100
        }],
        series: [
            {
                name: 'Max Price',
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
                data: this.mapMaxPrice()
            },
            {
                name: 'Min Price',
                type: 'line',
                z: 2,
                smooth: false,
                color: "#FFF",
                symbol: 'none',
                data: this.mapMinPrice(),
                areaStyle: {
                    color: "#FFF",
                    opacity: 1
                }
            },
            {
                name: 'Current Price',
                type: 'line',
                color:"#0072ED",
                smooth: false,
                showSymbol: false,
                data: this.mapCurrentPrice()
            },
            {
                name: 'RMS Price',
                type: 'line',
                color:"#cd6200",
                smooth: false,
                showSymbol: false,
                data: this.mapRMSPrice()
            },
            {
                name: 'Market Price',
                type: 'line',
                color:"#888b94",
                smooth: false,
                showSymbol: false,
                data: this.mapMarketPrice()
            },
            {
                name: 'H03',
                type: 'line',
                color:"#69B5DD",
                smooth: false,
                showSymbol: false,
                data: this.mapH03()
            },
            {
                name: 'H01',
                color:"#D26D6D",
                type: 'line',
                smooth: false,
                showSymbol: false,
                data: this.mapH01()
            },
        ]
    };

    private xAxisData(): string[] {
        let XAxisData: string[] = [];
        for (let i = 0; i < 277; i++) { XAxisData.push(`D-${365 - i}`) }
        return XAxisData;
    }
    private mapMaxPrice() {
        let arr = [];
        for (let i = 0; i < this.historicaldata[0].values.length; i++) {
            arr.push(this.historicaldata[0].values[i].y)
        }
        return (arr);
    }
    private mapMinPrice() {
        let arr = [];
        for (let i = 0; i < this.historicaldata[1].values.length; i++) {
            arr.push(this.historicaldata[1].values[i].y)
        }
        return (arr);
    }
    private mapCurrentPrice() {
        let arr = [];
        for (let i = 0; i < this.historicaldata[3].values.length; i++) {
            arr.push(this.historicaldata[3].values[i].y)
        }
        return (arr);
    }
    private mapRMSPrice() {
        let arr = [];
        for (let i = 0; i < this.historicaldata[4].values.length; i++) {
            arr.push(this.historicaldata[4].values[i].y)
        }
        return (arr);
    }
    private mapMarketPrice() {
        let arr = [];
        for (let i = 0; i < this.historicaldata[5].values.length; i++) {
            arr.push(this.historicaldata[5].values[i].y)
        }
        return (arr);
    }
    private mapH03() {
        let arr = [];
        for (let i = 0; i < this.historicaldata[6].values.length; i++) {
            arr.push(this.historicaldata[6].values[i].y)
        }
        return (arr);
    }
    private mapH01() {
        let arr = [];
        for (let i = 0; i < this.historicaldata[7].values.length; i++) {
            arr.push(this.historicaldata[7].values[i].y)
        }
        return (arr);
    }
}