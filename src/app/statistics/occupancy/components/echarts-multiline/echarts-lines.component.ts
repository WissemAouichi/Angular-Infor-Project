import { Component } from "@angular/core";
import { EChartsOption } from "echarts";
import HISTORICAL_DATA from '../echarts-multiline/Historical data.json'

@Component({
    selector:'echarts-lines',
    template:`<div echarts [options]="chartOption" class="demo-chart"></div>`
})

export class EchartsLinesComponent {
    historicaldata=HISTORICAL_DATA;
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
            feature: {
                dataZoom: {
                    yAxisIndex: 'none'
                },
                restore: {},
                saveAsImage: {}
            }
        },
        xAxis: {
            type:'category',
            data: this.xAxisData(),
            boundaryGap: false,
            inverse:false,
            axisTick:{
                show:false,
            },
            axisLabel:{
                interval:50
            }
        },
        yAxis: {
            type: 'value',
            min: 'dataMin',
            position:'right',
            axisLine:{
                show:true,
            },
            splitLine: {
                show: false
            }
        },
        dataZoom: [{
            type: 'inside',
            start: 40,
            end: 100
        }, {
            start: 0,
            end: 15
        }],
        series: [
            {
                name: 'Capacity',
                type: 'line',
                color:"#E84F4F",
                smooth: false,
                showSymbol: false,
                data: []
            },
           
        ]
    };
    private xAxisData(): string[] {
        let XAxisData: string[] = [];
        for (let i = 0; i < 366; i++) { XAxisData.push(`D-${365 - i}` )}
        return XAxisData;
    }
}