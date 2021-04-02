import { ChartData } from './chart-data';


export class ChartDataGloabal {

    public chartData: ChartData[];
    public fractionSize: number;
    public filter: string;
    public showLegend: boolean;
    public minFocusValue: number;
    public maxFocusValue: number;
    public showStaticLegend: boolean;
    public minGlobalValue: number;
    public maxGlobalValue: number;
    public ticks: any[];
    public tooltipOrders: string[];
    public xLabels: any;
    public keepFocus: boolean = true;


    constructor() { }

}
