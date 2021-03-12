import { Component } from "@angular/core";
import { EChartsOption } from "echarts";
import  SIMULATION_DATA  from '../echarts-historical-chart/Simulation data.json'

@Component({
    selector: 'echarts-historical',
    template: `<div echarts [options]="chartOption" class="demo-chart"></div>`
})

export class EchartsHistoricalComponent {
simulationdata=SIMULATION_DATA.graphData.chartData;

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
                data: this.maplblCapacity()
            },
            {
                name: 'Forecast',
                type: 'line',
                color:"#2578A9",
                smooth: false,
                showSymbol: false,
                data: this.mapForecast()
            },
            {
                name: 'Capacity',
                type: 'line',
                color:"#80CE4D",
                smooth: false,
                showSymbol: false,
                data: this.mapOTB()
            }
        ]
    };

    private xAxisData(): string[] {
        let XAxisData: string[] = [];
        for (let i = 0; i < 541; i++) { XAxisData.push(`D-${540 - i}` )}
        return XAxisData;
    }
    private maplblCapacity() {
        let arr = [];
        for (let i = 0; i < this.simulationdata[0].values.length; i++) {
          arr.push(this.simulationdata[0].values[i].y)
        }
        return (arr);
      }
      private mapForecast() {
        let arr = [];
        for (let j=0; j<276;j++) {arr.push(0)}
        for (let i = 0; i < this.simulationdata[2].values.length; i++) {
           arr.push(this.simulationdata[2].values[i].y)
        }
        return (arr);
      }
      private mapOTB() {
        let arr = [];
        for (let i = 0; i < this.simulationdata[1].values.length; i++) {
          arr.push(this.simulationdata[1].values[i].y)
        }
        return (arr);
      }
}