import { Component } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { EChartsOption } from "echarts";
import { SohoBusyIndicatorDirective } from "ids-enterprise-ng";
import * as moment from "moment";
import { ReportsService } from "./reports.service";

@Component({
  selector: "echarts-reports",
  templateUrl: "./reports.component.html",
  styleUrls: ["./reports.component.scss"],
})
export class ReportsComponent {
  //Global
  public busyIndicator: SohoBusyIndicatorDirective;
  //Select buttons
  public optionForm: FormGroup;
  public selectedDropdownFilter1;
  public dimension: FormControl;
  //Data variables
  public dataBuckets;
  public dataMarket;
  public globalData;
  //Chart variables
  public initOpts = { height: "500px", renderer: "svg" };
  public mergeOption;
  public weekDays = ["S", "M", "T", "W", "T", "F", "S"];
  public monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  private seasonLevels = {
    high: {
      itemStyle: {
        color: "rgba(255, 173, 177, 0.4)",
      },
      data: [
        [
          {
            name: "High",
            xAxis: "",
          },
          {
            xAxis: "",
          },
        ],
      ],
    },
    shoulder: {
      itemStyle: {
        color: "#add8e6",
      },
      data: [
        [
          {
            name: "Shoulder",
            xAxis: "",
          },
          {
            xAxis: "",
          },
        ],
      ],
    },
    medium: {
      itemStyle: {
        color: "#2DB329",
      },
      data: [
        [
          {
            name: "Low",
            xAxis: "",
          },
          {
            xAxis: "",
          },
        ],
      ],
    },
    low: {
      itemStyle: {
        color: "#FFAA00",
      },
      data: [
        [
          {
            name: "Medium",
            xAxis: "",
          },
          {
            xAxis: "",
          },
        ],
      ],
    },
  };
  public chartInitOption: EChartsOption = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        // 坐标轴指示器，坐触发有效
        type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
      },
    },
    legend: {
      data: [
        "Guaranteed",
        "Definite",
        "Option",
        "Tentative",
        "Unguaranteed",
        "Wait-list",
      ],
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "15%",
      containLabel: true,
    },
    dataZoom: {
      top: 410,
      start: 0,
      end: 30,
    },
    xAxis: [
      {
        id: "axe1",
        type: "time",
        show: false,
        interval: 10,
        // axisLabel: {
        //   formatter: (value) => {
        //     let date = new Date(value);
        //     return date.getMonth() +'-'+date.getFullYear();
        //   },
        // },
      },
      {
        id: "axe2",
        position: "bottom",
        offset: 0,
        data: [],
        //   interval: 1,
        axisLine: {
          show: true,
        },
        axisTick: {
          alignWithLabel: false,
          length: 40,
        },
        axisLabel: {
          height: 50,
          interval: 0,
          color: function (value, index) {
            return value.toString().includes("S") ? "red" : "green";
          },
          formatter: function (params, index) {
            return params.split("/").join("\n");
          },
        },
        splitLine: {
          show: false,
          // interval: function(index, value) {
          //   return value ? true : false;
          // },
          lineStyle: {
            join: "miter",
            miterLimit: 5,
          },
        },
      },
      {
        id: "weeks",
        position: "bottom",
        offset: 40,
        data: [],
        axisLine: {
          show: true,
        },
        axisTick: {
          alignWithLabel: false,
          length: 40,
        },
        axisLabel: {
          interval: 6,
          align: "left",
          lineHeight: 46,
          verticalAlign: "top",
        },
        splitLine: {
          show: false,
          // interval: function(index, value) {
          //   return value ? true : false;
          // }
        },
      },
      {
        id: "months",
        position: "bottom",
        offset: 80,
        data: [],
        //   interval: 1,
        axisLine: {
          show: true,
        },
        axisTick: {
          alignWithLabel: false,
          length: 40,
        },
        axisLabel: {
          interval: 30,
          align: "left",
          lineHeight: 30,
        },
        splitLine: {
          show: false,
          // interval: function(index, value) {
          //   return value ? true : false;
          // }
        },
      },
    ],
    yAxis: [
      {
        type: "value",
      },
    ],
    series: [
      {
        name: "Definite",
        type: "line",
        stack: "1",
        areaStyle: {},
        symbol: "none",
        emphasis: {
          focus: "none",
        },
        data: [],
        xAxisIndex: 1,
        markLine: {
          silent: true,
          lineStyle: {
            color: "#333",
          },
          data: [
            {
              yAxis: 14.7,
            },
          ],
        },
      },
      {
        name: "Guaranteed",
        type: "line",
        stack: "1",
        areaStyle: {},
        symbol: "none",
        xAxisIndex: 1,
        emphasis: {
          focus: "none",
        },
        data: [],
      },
      {
        name: "Option",
        type: "line",
        stack: "1",
        areaStyle: {},
        symbol: "none",
        xAxisIndex: 1,
        emphasis: {
          focus: "none",
        },
        data: [],
      },
      {
        name: "Tentative",
        type: "line",
        stack: "1",
        areaStyle: {},
        symbol: "none",
        xAxisIndex: 1,
        emphasis: {
          focus: "none",
        },
        data: [],
      },
      {
        name: "Unguaranteed",
        type: "line",
        stack: "1",
        areaStyle: {},
        symbol: "none",
        xAxisIndex: 1,
        data: [],
        emphasis: {
          focus: "none",
        },
      },
      {
        name: "Wait-list",
        type: "line",
        areaStyle: {},
        symbol: "none",
        stack: "1",
        xAxisIndex: 1,
        emphasis: {
          focus: "none",
        },
        data: [],
      },
      {
        name: "Capacity",
        type: "line",
        smooth: 0.5,
        xAxisIndex: 1,
        symbol: "none",
        data: [
          143, 143, 149, 152, 155, 145, 150, 144, 147, 154, 153, 141, 143, 142,
          146, 152, 150, 150, 150, 150, 150, 150, 150, 150, 140, 150, 144, 140,
          148, 143, 155, 141, 140, 149, 153, 155, 148, 141, 147, 142, 150, 149,
          141, 146, 153, 149, 148, 142, 147, 154, 148, 150, 149, 144, 153, 148,
          141, 149, 153, 144, 148, 148, 141, 149, 150, 148, 155, 142, 141, 155,
          143, 155, 155, 155, 145, 142, 154, 155, 141, 146, 154, 147, 151, 146,
          152, 152, 140, 145, 155, 150, 151, 145, 151, 154, 149, 149, 142, 151,
          148, 151, 148, 144, 146, 141, 141, 141, 152, 142, 141, 147, 145, 148,
          153, 140, 151, 143, 148, 152, 155, 155, 153, 147, 141, 149, 140, 155,
          148, 152, 147, 150, 148, 141, 140, 150, 146, 144, 142, 150, 147, 146,
          140, 154, 140, 146, 150, 146, 140, 153, 152, 140, 143, 155, 146, 149,
          145, 153, 142, 146, 146, 141, 142, 146, 144, 142, 143, 149, 146, 152,
          152, 144, 149, 153, 150, 150, 150, 150, 150, 150, 150, 150,
        ],
        markArea: {
          itemStyle: {
            color: "rgba(255, 173, 177, 0.4)",
          },
          data: [
            [
              {
                name: "High",
                xAxis: "2020-03-02",
              },
              {
                xAxis: "2020-03-11",
              },
            ],
          ],
        },
      },
      {
        name: "",
        type: "line",
        smooth: 0.5,
        symbol: "none",
        xAxisIndex: 1,
        data: [],
        markArea: {
          itemStyle: {
            color: "rgba(25, 173, 177, 0.4)",
          },
          data: [
            [
              {
                name: "Shor",
                xAxis: "2020-04-02",
              },
              {
                xAxis: "2020-04-03",
              },
            ],
          ],
        },
      },
      {
        name: "hidden",
        type: "line",
        xAxisId: "axe1",
        symbol: "none",
        data: [],
      },
    ],
  };
  // SideBar
  public totalAsDouble;
  public dataKeys;
  public keysProgress = [];
  public keysTotal = [];
  public timeAxisData = [];
  constructor(private dataService: ReportsService) {}
  ngOnInit() {
    this.dimension = new FormControl("");
    this.optionForm = new FormGroup({
      dimension: this.dimension,
    });
    this.globalData = this.dataService.getData();
    this.subValuesKeys();
    this.totalAsDouble = this.globalData.data[0].totalAsDouble;
    this.seasonArea();
    this.timeAxisData.push(
      this.globalData.data[0].days.map((day) => {
        return [new Date(day.date), null];
      })
    );
    this.mergeOption = {
      xAxis: [
        {
          id: "axe1",
        },
        {
          id: "axe2",
          data: this.globalData.data[0].days.map((day) => {
            return (
              this.weekDays[new Date(day.date).getDay()] +
              "/" +
              new Date(day.date).getDate()
            );
          }),
        },
        {
          id: "weeks",
          data: this.globalData.data[0].days.map((day) => {
            return moment(day.date).week();
          }),
        },
        {
          id: "months",
          data: this.globalData.data[0].days.map((day) => {
            return (
              this.monthNames[moment(day.date).month() + 1] +
              new Date(day.date).getFullYear()
            );
          }),
        },
      ],
      series: [
        {
          name: this.subValuesKeys()[0],
          data: this.globalData.data[0].days.map((day) => {
            return day.subValues[this.subValuesKeys()[0]];
          }),
        },
        {
          name: this.subValuesKeys()[1],
          data: this.globalData.data[0].days.map((day) => {
            return day.subValues[this.subValuesKeys()[1]];
          }),
        },
        {
          name: this.subValuesKeys()[2],
          data: this.globalData.data[0].days.map((day) => {
            return day.subValues[this.subValuesKeys()[2]];
          }),
        },
        {
          name: this.subValuesKeys()[3],
          data: this.globalData.data[0].days.map((day) => {
            return day.subValues[this.subValuesKeys()[3]];
          }),
        },
        {
          name: this.subValuesKeys()[4],
          data: this.globalData.data[0].days.map((day) => {
            return day.subValues[this.subValuesKeys()[4]];
          }),
        },
        {
          name: this.subValuesKeys()[5],
          data: this.globalData.data[0].days.map((day) => {
            return day.subValues[this.subValuesKeys()[5]];
          }),
        },
        {
          name: "Capacity",
          markArea: {
            itemStyle: {
              color: this.seasonLevels.high.itemStyle.color,
            },
            data: [
              [
                {
                  name: this.seasonLevels.high.data[0][0].name,
                  xAxis: this.seasonLevels.high.data[0][0].xAxis,
                },
                {
                  xAxis: this.seasonLevels.high.data[0][1].xAxis,
                },
              ],
            ],
          },
        },
        {
          name: "",
          markArea: {
            itemStyle: {
              color: this.seasonLevels.shoulder.itemStyle.color,
            },
            data: [
              [
                {
                  name: this.seasonLevels.shoulder.data[0][0].name,
                  xAxis: this.seasonLevels.shoulder.data[0][0].xAxis,
                },
                {
                  xAxis: this.seasonLevels.shoulder.data[0][1].xAxis,
                },
              ],
            ],
          },
        },
        {
          name: "hidden",
          data: this.timeAxisData[0],
        },
      ],
    };
    this.totalPerKey(this.dataKeys);
    console.log("the keysProgress array", this.keysProgress);
  }
  /**
   * Chart Datazoom Event
   */
  onChartEvent(event: any, type: string) {
    console.log("chart event:", type, event, event.end);
    // let minMaxDate = {
    //   minDate: this.dateService.getDateFromLongDate(
    //     this.datestamp[
    //       Math.round((event.start * (this.datestamp.length - 1)) / 100)
    //     ]
    //   ),
    //   maxDate: this.dateService.getDateFromLongDate(
    //     this.datestamp[
    //       Math.round((event.end * (this.datestamp.length - 1)) / 100)
    //     ]
    //   )
    // };
    // if (
    //   Math.round((event.end * (this.datestamp.length - 1)) / 100) -
    //     Math.round((event.start * (this.datestamp.length - 1)) / 100) <
    //   4
    // ) {
    //   this.showSymbol = true;
    //   this.mergeOption = {
    //     xAxis: {
    //       axisLabel: { showMinLabel: false, showMaxLabel: false },
    //       splitNumber: 1
    //     },
    //     series: this.showSymbolOnResize()
    //   };
    // } else {
    //   this.showSymbol = false;
    //   this.mergeOption = {
    //     xAxis: {
    //       axisLabel: { showMinLabel: true, showMaxLabel: true },
    //       splitNumber: 3
    //     },
    //     series: this.showSymbolOnResize()
    //   };
    // }
    // this.changeFocusDataChartEvent.emit(minMaxDate);
  }
  /**
   *
   * @returns The keys of subvalues in the selected data
   */
  subValuesKeys() {
    let keys = [];
    let subValuesKeys = this.globalData.data[0].days[0].subValues;
    for (var key in subValuesKeys) {
      keys.push(key);
    }
    this.dataKeys = keys;
    return keys;
  }

  /**
   * Total and progress for every key
   */
  totalPerKey(keys) {
    let total = 0;
    let totalArr = [];
    let progressArr = [];
    keys.forEach((key) => {
      for (let i = 0; i < this.globalData.data[0].days.length; i++) {
        if (this.globalData.data[0].days[i].subValues[key] !== undefined) {
          total += this.globalData.data[0].days[i].subValues[key].figure;
        } else total += 0;
      }
      totalArr.push(total);
      progressArr.push((total * 100) / this.totalAsDouble);
      total = 0;
    });
    this.keysProgress = progressArr;
    this.keysTotal = totalArr;
    return totalArr;
  }

  /**
   *
   */

  /**Event: On clicking apply button event
   *
   */
  onApply() {
    console.log(this.optionForm);
    if (
      this.optionForm.value.dimension == "empty" ||
      this.optionForm.value.dimension == ""
    ) {
      this.globalData = this.dataService.getData();
      this.subValuesKeys();
      this.totalAsDouble = this.globalData.data[0].totalAsDouble;
      console.log("subValues keys", this.subValuesKeys());
      console.log("The init data", this.globalData);
      this.mergeOption = {
        xAxis: {
          data: this.globalData.data[0].days.map((day) => {
            return day.date;
          }),
        },
        legend: {
          data: [
            this.subValuesKeys()[0] || null,
            this.subValuesKeys()[1] || null,
            this.subValuesKeys()[2] || null,
            this.subValuesKeys()[3] || null,
            this.subValuesKeys()[4] || null,
            this.subValuesKeys()[5] || null,
          ],
        },
        series: [
          {
            name: this.subValuesKeys()[0],
            data:
              this.globalData.data[0].days.map((day) => {
                return day.subValues[this.subValuesKeys()[0]];
              }) || null,
          },
          {
            name: this.subValuesKeys()[1],
            data: this.globalData.data[0].days.map((day) => {
              return day.subValues[this.subValuesKeys()[1]];
            }),
          },
          {
            name: this.subValuesKeys()[2],
            data: this.globalData.data[0].days.map((day) => {
              return day.subValues[this.subValuesKeys()[2]];
            }),
          },
          {
            name: this.subValuesKeys()[3],
            data: this.globalData.data[0].days.map((day) => {
              return day.subValues[this.subValuesKeys()[3]];
            }),
          },
          {
            name: this.subValuesKeys()[4],
            data: this.globalData.data[0].days.map((day) => {
              return day.subValues[this.subValuesKeys()[4]];
            }),
          },
          {
            name: this.subValuesKeys()[5],
            data: this.globalData.data[0].days.map((day) => {
              return day.subValues[this.subValuesKeys()[5]];
            }),
          },
        ],
      };
      this.totalPerKey(this.dataKeys);
      console.log("the keysProgress array", this.keysProgress);
    } else if (this.optionForm.value.dimension == "buckets") {
      this.globalData = this.dataService.getBucketsData();
      this.subValuesKeys();
      this.totalAsDouble = this.globalData.data[0].totalAsDouble;
      console.log("subValues keys", this.subValuesKeys());
      console.log("The init data", this.globalData);
      this.mergeOption = {
        xAxis: {
          data: this.globalData.data[0].days.map((day) => {
            return day.date;
          }),
        },
        legend: {
          data: [
            this.subValuesKeys()[0] || null,
            this.subValuesKeys()[1] || null,
            this.subValuesKeys()[2] || null,
            this.subValuesKeys()[3] || null,
            this.subValuesKeys()[4] || null,
            this.subValuesKeys()[5] || null,
          ],
        },
        series: [
          {
            name: this.subValuesKeys()[0],
            data:
              this.globalData.data[0].days.map((day) => {
                return day.subValues[this.subValuesKeys()[0]];
              }) || null,
          },
          {
            name: this.subValuesKeys()[1],
            data:
              this.globalData.data[0].days.map((day) => {
                return day.subValues[this.subValuesKeys()[1]];
              }) || null,
          },
          {
            name: this.subValuesKeys()[2],
            data:
              this.globalData.data[0].days.map((day) => {
                return day.subValues[this.subValuesKeys()[2]];
              }) || null,
          },
          {
            name: this.subValuesKeys()[3],
            data:
              this.globalData.data[0].days.map((day) => {
                return day.subValues[this.subValuesKeys()[3]];
              }) || null,
          },
          {
            name: this.subValuesKeys()[4],
            data:
              this.globalData.data[0].days.map((day) => {
                return day.subValues[this.subValuesKeys()[4]];
              }) || null,
          },
          {
            name: this.subValuesKeys()[5],
            data:
              this.globalData.data[0].days.map((day) => {
                return day.subValues[this.subValuesKeys()[5]];
              }) || null,
          },
        ],
      };
      this.totalPerKey(this.dataKeys);
      console.log("the keysProgress array", this.keysProgress);
    } else if (this.optionForm.value.dimension == "market") {
      this.globalData = this.dataService.getMarketSegmentData();
      this.subValuesKeys();
      this.totalAsDouble = this.globalData.data[0].totalAsDouble;
      console.log("subValues keys", this.subValuesKeys());
      console.log("The init data", this.globalData);
      this.mergeOption = {
        xAxis: {
          data: this.globalData.data[0].days.map((day) => {
            return day.date;
          }),
        },
        legend: {
          data: [
            this.subValuesKeys()[0] || null,
            this.subValuesKeys()[1] || null,
            this.subValuesKeys()[2] || null,
            this.subValuesKeys()[3] || null,
            this.subValuesKeys()[4] || null,
            this.subValuesKeys()[5] || null,
          ],
        },
        series: [
          {
            name: this.subValuesKeys()[0],
            data:
              this.globalData.data[0].days.map((day) => {
                return day.subValues[this.subValuesKeys()[0]];
              }) || null,
          },
          {
            name: this.subValuesKeys()[1],
            data:
              this.globalData.data[0].days.map((day) => {
                return day.subValues[this.subValuesKeys()[1]];
              }) || null,
          },
          {
            name: this.subValuesKeys()[2],
            data:
              this.globalData.data[0].days.map((day) => {
                return day.subValues[this.subValuesKeys()[2]];
              }) || null,
          },
          {
            name: this.subValuesKeys()[3],
            data:
              this.globalData.data[0].days.map((day) => {
                return day.subValues[this.subValuesKeys()[3]];
              }) || null,
          },
          {
            name: this.subValuesKeys()[4],
            data:
              this.globalData.data[0].days.map((day) => {
                return day.subValues[this.subValuesKeys()[4]];
              }) || null,
          },
          {
            name: this.subValuesKeys()[5],
            data:
              this.globalData.data[0].days.map((day) => {
                return day.subValues[this.subValuesKeys()[5]];
              }) || null,
          },
        ],
      };
      this.totalPerKey(this.dataKeys);
      console.log("the keysProgress array", this.keysProgress);
    }
  }
  public keyProgress = 50;
  public averageAsDoubleProgress = 14;
  public totalAsDoubleProgress = 100;
  saveOption(formvalue) {
    this.dimension = formvalue.dimension;
  }

  seasonArea() {
    let high = [];
    let shoulder = [];
    let low = [];
    let medium = [];
    this.globalData.data[0].days.forEach((date) => {
      switch (date.seasonLevel) {
        case "1.0":
          high.push(this.globalData.data[0].days.indexOf(date));
          break;
        case "2.0":
          shoulder.push(this.globalData.data[0].days.indexOf(date));
          break;
        case "3.0":
          low.push(this.globalData.data[0].days.indexOf(date));
          break;
        case "4.0":
          medium.push(this.globalData.data[0].days.indexOf(date));
          break;
      }
    });
    this.seasonLevels.high.data[0][0].xAxis =
      this.globalData.data[0].days[high[0]].date;
    this.seasonLevels.high.data[0][1].xAxis =
      this.globalData.data[0].days[high[high.length - 1]].date;
    this.seasonLevels.shoulder.data[0][0].xAxis =
      this.globalData.data[0].days[shoulder[0]].date;
    this.seasonLevels.shoulder.data[0][1].xAxis =
      this.globalData.data[0].days[shoulder[shoulder.length - 1]].date;
    // this.seasonLevels.low.data[0][0].xAxis = this.globalData.data[0].days[low[0]].date
    // this.seasonLevels.low.data[0][1].xAxis = this.globalData.data[0].days[low[low.length - 1]].date
    // this.seasonLevels.medium.data[0][0].xAxis = this.globalData.data[0].days[medium[0]].date
    // this.seasonLevels.medium.data[0][1].xAxis = this.globalData.data[0].days[medium[medium.length - 1]].date
  }
}
