import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import  OCCUPANCY_FORECAST  from '../price-variation/Price Variation.json'

declare const Plotly;
@Component({
    selector: 'price-variation',
    template:'<div #myDiv></div>'
})

export class OccupancyForecastComponent implements OnInit{
    @ViewChild('myDiv',{static:false}) myDivContainer!:ElementRef;
    myDiv: any;
    
    priceData=OCCUPANCY_FORECAST.chartDataTreeSet

    constructor(){}
    
    ngOnInit(){
        this.myDiv={
            data: [
              {
                x: ['2020-01-01 22:23:00','2020-01-02 22:23:00','2020-01-03 22:23:00','2020-01-04 22:23:00','2020-01-05 22:23:00','2020-01-06 22:23:00','2020-01-07 22:23:00','2020-01-08 22:23:00','2020-01-09 22:23:00','2020-01-10 22:23:00','2020-01-11 22:23:00','2020-01-12 22:23:00','2020-01-13 22:23:00','2020-01-14 22:23:00','2020-01-15 22:23:00','2020-01-16 22:23:00','2020-01-17 22:23:00','2020-01-18 22:23:00','2020-01-19 22:23:00','2020-01-20 22:23:00','2020-01-21 22:23:00','2020-01-22 22:23:00','2020-01-23 22:23:00','2020-01-24 22:23:00','2020-01-25 22:23:00','2020-01-26 22:23:00','2020-01-27 22:23:00','2020-01-28 22:23:00','2020-01-29 22:23:00','2020-01-30 22:23:00','2020-01-31 22:23:00','2020-02-01 22:23:00','2020-02-02 22:23:00','2020-02-03 22:23:00','2020-02-04 22:23:00','2020-02-05 22:23:00','2020-02-06 22:23:00','2020-02-07 22:23:00','2020-02-08 22:23:00','2020-02-09 22:23:00','2020-02-10 22:23:00','2020-02-11 22:23:00','2020-02-12 22:23:00','2020-02-13 22:23:00','2020-02-14 22:23:00','2020-02-15 22:23:00','2020-02-16 22:23:00','2020-02-17 22:23:00','2020-02-18 22:23:00','2020-02-19 22:23:00','2020-02-20 22:23:00','2020-02-21 22:23:00','2020-02-22 22:23:00','2020-02-23 22:23:00','2020-02-24 22:23:00','2020-02-25 22:23:00','2020-02-26 22:23:00','2020-02-27 22:23:00','2020-02-28 22:23:00','2020-03-01 22:23:00','2020-03-02 22:23:00','2020-03-03 22:23:00','2020-03-04 22:23:00','2020-03-05 22:23:00','2020-03-06 22:23:00','2020-03-07 22:23:00','2020-03-08 22:23:00','2020-03-09 22:23:00','2020-03-10 22:23:00','2020-03-11 22:23:00','2020-03-12 22:23:00','2020-03-13 22:23:00','2020-03-14 22:23:00','2020-03-15 22:23:00','2020-03-16 22:23:00','2020-03-17 22:23:00','2020-03-18 22:23:00','2020-03-19 22:23:00','2020-03-20 22:23:00','2020-03-21 22:23:00','2020-03-22 22:23:00','2020-03-23 22:23:00','2020-03-24 22:23:00','2020-03-25 22:23:00','2020-03-26 22:23:00','2020-03-27 22:23:00','2020-03-28 22:23:00','2020-03-29 22:23:00','2020-03-30 22:23:00','2020-03-31 22:23:00','2020-04-01 22:23:00','2020-04-02 22:23:00','2020-04-03 22:23:00','2020-04-04 22:23:00','2020-04-05 22:23:00','2020-04-06 22:23:00','2020-04-07 22:23:00','2020-04-08 22:23:00','2020-04-09 22:23:00','2020-04-10 22:23:00','2020-04-11 22:23:00','2020-04-12 22:23:00','2020-04-13 22:23:00','2020-04-14 22:23:00','2020-04-15 22:23:00','2020-04-16 22:23:00','2020-04-17 22:23:00','2020-04-18 22:23:00','2020-04-19 22:23:00','2020-04-20 22:23:00','2020-04-21 22:23:00','2020-04-22 22:23:00','2020-04-23 22:23:00','2020-04-24 22:23:00','2020-04-25 22:23:00','2020-04-26 22:23:00','2020-04-27 22:23:00','2020-04-28 22:23:00','2020-04-29 22:23:00','2020-04-30 22:23:00','2020-05-01 22:23:00','2020-05-02 22:23:00','2020-05-03 22:23:00','2020-05-04 22:23:00','2020-05-05 22:23:00','2020-05-06 22:23:00','2020-05-07 22:23:00','2020-05-08 22:23:00','2020-05-09 22:23:00','2020-05-10 22:23:00','2020-05-11 22:23:00','2020-05-12 22:23:00','2020-05-13 22:23:00','2020-05-14 22:23:00','2020-05-15 22:23:00','2020-05-16 22:23:00','2020-05-17 22:23:00','2020-05-18 22:23:00','2020-05-19 22:23:00','2020-05-20 22:23:00','2020-05-21 22:23:00','2020-05-22 22:23:00','2020-05-23 22:23:00','2020-05-24 22:23:00','2020-05-25 22:23:00','2020-05-26 22:23:00','2020-05-27 22:23:00','2020-05-28 22:23:00','2020-05-29 22:23:00','2020-05-30 22:23:00','2020-05-31 22:23:00','2020-06-01 22:23:00','2020-06-02 22:23:00','2020-06-03 22:23:00','2020-06-04 22:23:00','2020-06-05 22:23:00','2020-06-06 22:23:00','2020-06-07 22:23:00','2020-06-08 22:23:00','2020-06-09 22:23:00','2020-06-10 22:23:00','2020-06-11 22:23:00','2020-06-12 22:23:00','2020-06-13 22:23:00','2020-06-14 22:23:00','2020-06-15 22:23:00','2020-06-16 22:23:00','2020-06-17 22:23:00','2020-06-18 22:23:00','2020-06-19 22:23:00','2020-06-20 22:23:00','2020-06-21 22:23:00','2020-06-22 22:23:00','2020-06-23 22:23:00','2020-06-24 22:23:00','2020-06-25 22:23:00','2020-06-26 22:23:00','2020-06-27 22:23:00','2020-06-28 22:23:00','2020-06-29 22:23:00','2020-06-30 22:23:00','2020-07-01 22:23:00','2020-07-02 22:23:00','2020-07-03 22:23:00','2020-07-04 22:23:00','2020-07-05 22:23:00','2020-07-06 22:23:00','2020-07-07 22:23:00','2020-07-08 22:23:00','2020-07-09 22:23:00','2020-07-10 22:23:00','2020-07-11 22:23:00','2020-07-12 22:23:00','2020-07-13 22:23:00','2020-07-14 22:23:00','2020-07-15 22:23:00','2020-07-16 22:23:00','2020-07-17 22:23:00','2020-07-18 22:23:00','2020-07-19 22:23:00','2020-07-20 22:23:00','2020-07-21 22:23:00','2020-07-22 22:23:00','2020-07-23 22:23:00','2020-07-24 22:23:00','2020-07-25 22:23:00','2020-07-26 22:23:00','2020-07-27 22:23:00','2020-07-28 22:23:00','2020-07-29 22:23:00','2020-07-30 22:23:00','2020-07-31 22:23:00','2020-08-01 22:23:00','2020-08-01 22:23:00','2020-08-02 22:23:00','2020-08-03 22:23:00','2020-08-04 22:23:00','2020-08-05 22:23:00','2020-08-06 22:23:00','2020-08-07 22:23:00','2020-08-08 22:23:00','2020-08-09 22:23:00','2020-08-10 22:23:00','2020-08-11 22:23:00','2020-08-12 22:23:00','2020-08-13 22:23:00','2020-08-14 22:23:00','2020-08-15 22:23:00','2020-08-16 22:23:00','2020-08-17 22:23:00','2020-08-18 22:23:00','2020-08-19 22:23:00','2020-08-20 22:23:00','2020-08-21 22:23:00','2020-08-22 22:23:00','2020-08-23 22:23:00','2020-08-24 22:23:00','2020-08-25 22:23:00','2020-08-26 22:23:00','2020-08-27 22:23:00','2020-08-28 22:23:00','2020-08-29 22:23:00','2020-08-30 22:23:00'],
                y: this.maplblMaxPrice(),
                type:'scatter',
                name: this.priceData[0].key,
                mode: "lines",
                fill:'tozeroy',
                fillcolor: "#e4e6e8",
                line: {
                  color: "#e4e6e8"
                }
              },
              {
                x: ['2020-01-01 22:23:00','2020-01-02 22:23:00','2020-01-03 22:23:00','2020-01-04 22:23:00','2020-01-05 22:23:00','2020-01-06 22:23:00','2020-01-07 22:23:00','2020-01-08 22:23:00','2020-01-09 22:23:00','2020-01-10 22:23:00','2020-01-11 22:23:00','2020-01-12 22:23:00','2020-01-13 22:23:00','2020-01-14 22:23:00','2020-01-15 22:23:00','2020-01-16 22:23:00','2020-01-17 22:23:00','2020-01-18 22:23:00','2020-01-19 22:23:00','2020-01-20 22:23:00','2020-01-21 22:23:00','2020-01-22 22:23:00','2020-01-23 22:23:00','2020-01-24 22:23:00','2020-01-25 22:23:00','2020-01-26 22:23:00','2020-01-27 22:23:00','2020-01-28 22:23:00','2020-01-29 22:23:00','2020-01-30 22:23:00','2020-01-31 22:23:00','2020-02-01 22:23:00','2020-02-02 22:23:00','2020-02-03 22:23:00','2020-02-04 22:23:00','2020-02-05 22:23:00','2020-02-06 22:23:00','2020-02-07 22:23:00','2020-02-08 22:23:00','2020-02-09 22:23:00','2020-02-10 22:23:00','2020-02-11 22:23:00','2020-02-12 22:23:00','2020-02-13 22:23:00','2020-02-14 22:23:00','2020-02-15 22:23:00','2020-02-16 22:23:00','2020-02-17 22:23:00','2020-02-18 22:23:00','2020-02-19 22:23:00','2020-02-20 22:23:00','2020-02-21 22:23:00','2020-02-22 22:23:00','2020-02-23 22:23:00','2020-02-24 22:23:00','2020-02-25 22:23:00','2020-02-26 22:23:00','2020-02-27 22:23:00','2020-02-28 22:23:00','2020-03-01 22:23:00','2020-03-02 22:23:00','2020-03-03 22:23:00','2020-03-04 22:23:00','2020-03-05 22:23:00','2020-03-06 22:23:00','2020-03-07 22:23:00','2020-03-08 22:23:00','2020-03-09 22:23:00','2020-03-10 22:23:00','2020-03-11 22:23:00','2020-03-12 22:23:00','2020-03-13 22:23:00','2020-03-14 22:23:00','2020-03-15 22:23:00','2020-03-16 22:23:00','2020-03-17 22:23:00','2020-03-18 22:23:00','2020-03-19 22:23:00','2020-03-20 22:23:00','2020-03-21 22:23:00','2020-03-22 22:23:00','2020-03-23 22:23:00','2020-03-24 22:23:00','2020-03-25 22:23:00','2020-03-26 22:23:00','2020-03-27 22:23:00','2020-03-28 22:23:00','2020-03-29 22:23:00','2020-03-30 22:23:00','2020-03-31 22:23:00','2020-04-01 22:23:00','2020-04-02 22:23:00','2020-04-03 22:23:00','2020-04-04 22:23:00','2020-04-05 22:23:00','2020-04-06 22:23:00','2020-04-07 22:23:00','2020-04-08 22:23:00','2020-04-09 22:23:00','2020-04-10 22:23:00','2020-04-11 22:23:00','2020-04-12 22:23:00','2020-04-13 22:23:00','2020-04-14 22:23:00','2020-04-15 22:23:00','2020-04-16 22:23:00','2020-04-17 22:23:00','2020-04-18 22:23:00','2020-04-19 22:23:00','2020-04-20 22:23:00','2020-04-21 22:23:00','2020-04-22 22:23:00','2020-04-23 22:23:00','2020-04-24 22:23:00','2020-04-25 22:23:00','2020-04-26 22:23:00','2020-04-27 22:23:00','2020-04-28 22:23:00','2020-04-29 22:23:00','2020-04-30 22:23:00','2020-05-01 22:23:00','2020-05-02 22:23:00','2020-05-03 22:23:00','2020-05-04 22:23:00','2020-05-05 22:23:00','2020-05-06 22:23:00','2020-05-07 22:23:00','2020-05-08 22:23:00','2020-05-09 22:23:00','2020-05-10 22:23:00','2020-05-11 22:23:00','2020-05-12 22:23:00','2020-05-13 22:23:00','2020-05-14 22:23:00','2020-05-15 22:23:00','2020-05-16 22:23:00','2020-05-17 22:23:00','2020-05-18 22:23:00','2020-05-19 22:23:00','2020-05-20 22:23:00','2020-05-21 22:23:00','2020-05-22 22:23:00','2020-05-23 22:23:00','2020-05-24 22:23:00','2020-05-25 22:23:00','2020-05-26 22:23:00','2020-05-27 22:23:00','2020-05-28 22:23:00','2020-05-29 22:23:00','2020-05-30 22:23:00','2020-05-31 22:23:00','2020-06-01 22:23:00','2020-06-02 22:23:00','2020-06-03 22:23:00','2020-06-04 22:23:00','2020-06-05 22:23:00','2020-06-06 22:23:00','2020-06-07 22:23:00','2020-06-08 22:23:00','2020-06-09 22:23:00','2020-06-10 22:23:00','2020-06-11 22:23:00','2020-06-12 22:23:00','2020-06-13 22:23:00','2020-06-14 22:23:00','2020-06-15 22:23:00','2020-06-16 22:23:00','2020-06-17 22:23:00','2020-06-18 22:23:00','2020-06-19 22:23:00','2020-06-20 22:23:00','2020-06-21 22:23:00','2020-06-22 22:23:00','2020-06-23 22:23:00','2020-06-24 22:23:00','2020-06-25 22:23:00','2020-06-26 22:23:00','2020-06-27 22:23:00','2020-06-28 22:23:00','2020-06-29 22:23:00','2020-06-30 22:23:00','2020-07-01 22:23:00','2020-07-02 22:23:00','2020-07-03 22:23:00','2020-07-04 22:23:00','2020-07-05 22:23:00','2020-07-06 22:23:00','2020-07-07 22:23:00','2020-07-08 22:23:00','2020-07-09 22:23:00','2020-07-10 22:23:00','2020-07-11 22:23:00','2020-07-12 22:23:00','2020-07-13 22:23:00','2020-07-14 22:23:00','2020-07-15 22:23:00','2020-07-16 22:23:00','2020-07-17 22:23:00','2020-07-18 22:23:00','2020-07-19 22:23:00','2020-07-20 22:23:00','2020-07-21 22:23:00','2020-07-22 22:23:00','2020-07-23 22:23:00','2020-07-24 22:23:00','2020-07-25 22:23:00','2020-07-26 22:23:00','2020-07-27 22:23:00','2020-07-28 22:23:00','2020-07-29 22:23:00','2020-07-30 22:23:00','2020-07-31 22:23:00','2020-08-01 22:23:00','2020-08-01 22:23:00','2020-08-02 22:23:00','2020-08-03 22:23:00','2020-08-04 22:23:00','2020-08-05 22:23:00','2020-08-06 22:23:00','2020-08-07 22:23:00','2020-08-08 22:23:00','2020-08-09 22:23:00','2020-08-10 22:23:00','2020-08-11 22:23:00','2020-08-12 22:23:00','2020-08-13 22:23:00','2020-08-14 22:23:00','2020-08-15 22:23:00','2020-08-16 22:23:00','2020-08-17 22:23:00','2020-08-18 22:23:00','2020-08-19 22:23:00','2020-08-20 22:23:00','2020-08-21 22:23:00','2020-08-22 22:23:00','2020-08-23 22:23:00','2020-08-24 22:23:00','2020-08-25 22:23:00','2020-08-26 22:23:00','2020-08-27 22:23:00','2020-08-28 22:23:00','2020-08-29 22:23:00','2020-08-30 22:23:00'],
                y: this.maplblMinPrice(),
                type:'scatter',
                name: this.priceData[1].key,
                mode: "lines",
                fill:'tozeroy',
                fillcolor: "#FFFFFF",
                line: {
                  color: "#FFFFFF"
                }
              },
              {
                x: ['2020-01-01 22:23:00','2020-01-02 22:23:00','2020-01-03 22:23:00','2020-01-04 22:23:00','2020-01-05 22:23:00','2020-01-06 22:23:00','2020-01-07 22:23:00','2020-01-08 22:23:00','2020-01-09 22:23:00','2020-01-10 22:23:00','2020-01-11 22:23:00','2020-01-12 22:23:00','2020-01-13 22:23:00','2020-01-14 22:23:00','2020-01-15 22:23:00','2020-01-16 22:23:00','2020-01-17 22:23:00','2020-01-18 22:23:00','2020-01-19 22:23:00','2020-01-20 22:23:00','2020-01-21 22:23:00','2020-01-22 22:23:00','2020-01-23 22:23:00','2020-01-24 22:23:00','2020-01-25 22:23:00','2020-01-26 22:23:00','2020-01-27 22:23:00','2020-01-28 22:23:00','2020-01-29 22:23:00','2020-01-30 22:23:00','2020-01-31 22:23:00','2020-02-01 22:23:00','2020-02-02 22:23:00','2020-02-03 22:23:00','2020-02-04 22:23:00','2020-02-05 22:23:00','2020-02-06 22:23:00','2020-02-07 22:23:00','2020-02-08 22:23:00','2020-02-09 22:23:00','2020-02-10 22:23:00','2020-02-11 22:23:00','2020-02-12 22:23:00','2020-02-13 22:23:00','2020-02-14 22:23:00','2020-02-15 22:23:00','2020-02-16 22:23:00','2020-02-17 22:23:00','2020-02-18 22:23:00','2020-02-19 22:23:00','2020-02-20 22:23:00','2020-02-21 22:23:00','2020-02-22 22:23:00','2020-02-23 22:23:00','2020-02-24 22:23:00','2020-02-25 22:23:00','2020-02-26 22:23:00','2020-02-27 22:23:00','2020-02-28 22:23:00','2020-03-01 22:23:00','2020-03-02 22:23:00','2020-03-03 22:23:00','2020-03-04 22:23:00','2020-03-05 22:23:00','2020-03-06 22:23:00','2020-03-07 22:23:00','2020-03-08 22:23:00','2020-03-09 22:23:00','2020-03-10 22:23:00','2020-03-11 22:23:00','2020-03-12 22:23:00','2020-03-13 22:23:00','2020-03-14 22:23:00','2020-03-15 22:23:00','2020-03-16 22:23:00','2020-03-17 22:23:00','2020-03-18 22:23:00','2020-03-19 22:23:00','2020-03-20 22:23:00','2020-03-21 22:23:00','2020-03-22 22:23:00','2020-03-23 22:23:00','2020-03-24 22:23:00','2020-03-25 22:23:00','2020-03-26 22:23:00','2020-03-27 22:23:00','2020-03-28 22:23:00','2020-03-29 22:23:00','2020-03-30 22:23:00','2020-03-31 22:23:00','2020-04-01 22:23:00','2020-04-02 22:23:00','2020-04-03 22:23:00','2020-04-04 22:23:00','2020-04-05 22:23:00','2020-04-06 22:23:00','2020-04-07 22:23:00','2020-04-08 22:23:00','2020-04-09 22:23:00','2020-04-10 22:23:00','2020-04-11 22:23:00','2020-04-12 22:23:00','2020-04-13 22:23:00','2020-04-14 22:23:00','2020-04-15 22:23:00','2020-04-16 22:23:00','2020-04-17 22:23:00','2020-04-18 22:23:00','2020-04-19 22:23:00','2020-04-20 22:23:00','2020-04-21 22:23:00','2020-04-22 22:23:00','2020-04-23 22:23:00','2020-04-24 22:23:00','2020-04-25 22:23:00','2020-04-26 22:23:00','2020-04-27 22:23:00','2020-04-28 22:23:00','2020-04-29 22:23:00','2020-04-30 22:23:00','2020-05-01 22:23:00','2020-05-02 22:23:00','2020-05-03 22:23:00','2020-05-04 22:23:00','2020-05-05 22:23:00','2020-05-06 22:23:00','2020-05-07 22:23:00','2020-05-08 22:23:00','2020-05-09 22:23:00','2020-05-10 22:23:00','2020-05-11 22:23:00','2020-05-12 22:23:00','2020-05-13 22:23:00','2020-05-14 22:23:00','2020-05-15 22:23:00','2020-05-16 22:23:00','2020-05-17 22:23:00','2020-05-18 22:23:00','2020-05-19 22:23:00','2020-05-20 22:23:00','2020-05-21 22:23:00','2020-05-22 22:23:00','2020-05-23 22:23:00','2020-05-24 22:23:00','2020-05-25 22:23:00','2020-05-26 22:23:00','2020-05-27 22:23:00','2020-05-28 22:23:00','2020-05-29 22:23:00','2020-05-30 22:23:00','2020-05-31 22:23:00','2020-06-01 22:23:00','2020-06-02 22:23:00','2020-06-03 22:23:00','2020-06-04 22:23:00','2020-06-05 22:23:00','2020-06-06 22:23:00','2020-06-07 22:23:00','2020-06-08 22:23:00','2020-06-09 22:23:00','2020-06-10 22:23:00','2020-06-11 22:23:00','2020-06-12 22:23:00','2020-06-13 22:23:00','2020-06-14 22:23:00','2020-06-15 22:23:00','2020-06-16 22:23:00','2020-06-17 22:23:00','2020-06-18 22:23:00','2020-06-19 22:23:00','2020-06-20 22:23:00','2020-06-21 22:23:00','2020-06-22 22:23:00','2020-06-23 22:23:00','2020-06-24 22:23:00','2020-06-25 22:23:00','2020-06-26 22:23:00','2020-06-27 22:23:00','2020-06-28 22:23:00','2020-06-29 22:23:00','2020-06-30 22:23:00','2020-07-01 22:23:00','2020-07-02 22:23:00','2020-07-03 22:23:00','2020-07-04 22:23:00','2020-07-05 22:23:00','2020-07-06 22:23:00','2020-07-07 22:23:00','2020-07-08 22:23:00','2020-07-09 22:23:00','2020-07-10 22:23:00','2020-07-11 22:23:00','2020-07-12 22:23:00','2020-07-13 22:23:00','2020-07-14 22:23:00','2020-07-15 22:23:00','2020-07-16 22:23:00','2020-07-17 22:23:00','2020-07-18 22:23:00','2020-07-19 22:23:00','2020-07-20 22:23:00','2020-07-21 22:23:00','2020-07-22 22:23:00','2020-07-23 22:23:00','2020-07-24 22:23:00','2020-07-25 22:23:00','2020-07-26 22:23:00','2020-07-27 22:23:00','2020-07-28 22:23:00','2020-07-29 22:23:00','2020-07-30 22:23:00','2020-07-31 22:23:00','2020-08-01 22:23:00','2020-08-01 22:23:00','2020-08-02 22:23:00','2020-08-03 22:23:00','2020-08-04 22:23:00','2020-08-05 22:23:00','2020-08-06 22:23:00','2020-08-07 22:23:00','2020-08-08 22:23:00','2020-08-09 22:23:00','2020-08-10 22:23:00','2020-08-11 22:23:00','2020-08-12 22:23:00','2020-08-13 22:23:00','2020-08-14 22:23:00','2020-08-15 22:23:00','2020-08-16 22:23:00','2020-08-17 22:23:00','2020-08-18 22:23:00','2020-08-19 22:23:00','2020-08-20 22:23:00','2020-08-21 22:23:00','2020-08-22 22:23:00','2020-08-23 22:23:00','2020-08-24 22:23:00','2020-08-25 22:23:00','2020-08-26 22:23:00','2020-08-27 22:23:00','2020-08-28 22:23:00','2020-08-29 22:23:00','2020-08-30 22:23:00'],
                y: this.maplblCurrentPrice(),
                type:'scatter',
                name: this.priceData[2].key,
                mode: "lines",
                line: {
                  color: "#0072ED"
                }
              },
              {
                x: ['2020-01-01 22:23:00','2020-01-02 22:23:00','2020-01-03 22:23:00','2020-01-04 22:23:00','2020-01-05 22:23:00','2020-01-06 22:23:00','2020-01-07 22:23:00','2020-01-08 22:23:00','2020-01-09 22:23:00','2020-01-10 22:23:00','2020-01-11 22:23:00','2020-01-12 22:23:00','2020-01-13 22:23:00','2020-01-14 22:23:00','2020-01-15 22:23:00','2020-01-16 22:23:00','2020-01-17 22:23:00','2020-01-18 22:23:00','2020-01-19 22:23:00','2020-01-20 22:23:00','2020-01-21 22:23:00','2020-01-22 22:23:00','2020-01-23 22:23:00','2020-01-24 22:23:00','2020-01-25 22:23:00','2020-01-26 22:23:00','2020-01-27 22:23:00','2020-01-28 22:23:00','2020-01-29 22:23:00','2020-01-30 22:23:00','2020-01-31 22:23:00','2020-02-01 22:23:00','2020-02-02 22:23:00','2020-02-03 22:23:00','2020-02-04 22:23:00','2020-02-05 22:23:00','2020-02-06 22:23:00','2020-02-07 22:23:00','2020-02-08 22:23:00','2020-02-09 22:23:00','2020-02-10 22:23:00','2020-02-11 22:23:00','2020-02-12 22:23:00','2020-02-13 22:23:00','2020-02-14 22:23:00','2020-02-15 22:23:00','2020-02-16 22:23:00','2020-02-17 22:23:00','2020-02-18 22:23:00','2020-02-19 22:23:00','2020-02-20 22:23:00','2020-02-21 22:23:00','2020-02-22 22:23:00','2020-02-23 22:23:00','2020-02-24 22:23:00','2020-02-25 22:23:00','2020-02-26 22:23:00','2020-02-27 22:23:00','2020-02-28 22:23:00','2020-03-01 22:23:00','2020-03-02 22:23:00','2020-03-03 22:23:00','2020-03-04 22:23:00','2020-03-05 22:23:00','2020-03-06 22:23:00','2020-03-07 22:23:00','2020-03-08 22:23:00','2020-03-09 22:23:00','2020-03-10 22:23:00','2020-03-11 22:23:00','2020-03-12 22:23:00','2020-03-13 22:23:00','2020-03-14 22:23:00','2020-03-15 22:23:00','2020-03-16 22:23:00','2020-03-17 22:23:00','2020-03-18 22:23:00','2020-03-19 22:23:00','2020-03-20 22:23:00','2020-03-21 22:23:00','2020-03-22 22:23:00','2020-03-23 22:23:00','2020-03-24 22:23:00','2020-03-25 22:23:00','2020-03-26 22:23:00','2020-03-27 22:23:00','2020-03-28 22:23:00','2020-03-29 22:23:00','2020-03-30 22:23:00','2020-03-31 22:23:00','2020-04-01 22:23:00','2020-04-02 22:23:00','2020-04-03 22:23:00','2020-04-04 22:23:00','2020-04-05 22:23:00','2020-04-06 22:23:00','2020-04-07 22:23:00','2020-04-08 22:23:00','2020-04-09 22:23:00','2020-04-10 22:23:00','2020-04-11 22:23:00','2020-04-12 22:23:00','2020-04-13 22:23:00','2020-04-14 22:23:00','2020-04-15 22:23:00','2020-04-16 22:23:00','2020-04-17 22:23:00','2020-04-18 22:23:00','2020-04-19 22:23:00','2020-04-20 22:23:00','2020-04-21 22:23:00','2020-04-22 22:23:00','2020-04-23 22:23:00','2020-04-24 22:23:00','2020-04-25 22:23:00','2020-04-26 22:23:00','2020-04-27 22:23:00','2020-04-28 22:23:00','2020-04-29 22:23:00','2020-04-30 22:23:00','2020-05-01 22:23:00','2020-05-02 22:23:00','2020-05-03 22:23:00','2020-05-04 22:23:00','2020-05-05 22:23:00','2020-05-06 22:23:00','2020-05-07 22:23:00','2020-05-08 22:23:00','2020-05-09 22:23:00','2020-05-10 22:23:00','2020-05-11 22:23:00','2020-05-12 22:23:00','2020-05-13 22:23:00','2020-05-14 22:23:00','2020-05-15 22:23:00','2020-05-16 22:23:00','2020-05-17 22:23:00','2020-05-18 22:23:00','2020-05-19 22:23:00','2020-05-20 22:23:00','2020-05-21 22:23:00','2020-05-22 22:23:00','2020-05-23 22:23:00','2020-05-24 22:23:00','2020-05-25 22:23:00','2020-05-26 22:23:00','2020-05-27 22:23:00','2020-05-28 22:23:00','2020-05-29 22:23:00','2020-05-30 22:23:00','2020-05-31 22:23:00','2020-06-01 22:23:00','2020-06-02 22:23:00','2020-06-03 22:23:00','2020-06-04 22:23:00','2020-06-05 22:23:00','2020-06-06 22:23:00','2020-06-07 22:23:00','2020-06-08 22:23:00','2020-06-09 22:23:00','2020-06-10 22:23:00','2020-06-11 22:23:00','2020-06-12 22:23:00','2020-06-13 22:23:00','2020-06-14 22:23:00','2020-06-15 22:23:00','2020-06-16 22:23:00','2020-06-17 22:23:00','2020-06-18 22:23:00','2020-06-19 22:23:00','2020-06-20 22:23:00','2020-06-21 22:23:00','2020-06-22 22:23:00','2020-06-23 22:23:00','2020-06-24 22:23:00','2020-06-25 22:23:00','2020-06-26 22:23:00','2020-06-27 22:23:00','2020-06-28 22:23:00','2020-06-29 22:23:00','2020-06-30 22:23:00','2020-07-01 22:23:00','2020-07-02 22:23:00','2020-07-03 22:23:00','2020-07-04 22:23:00','2020-07-05 22:23:00','2020-07-06 22:23:00','2020-07-07 22:23:00','2020-07-08 22:23:00','2020-07-09 22:23:00','2020-07-10 22:23:00','2020-07-11 22:23:00','2020-07-12 22:23:00','2020-07-13 22:23:00','2020-07-14 22:23:00','2020-07-15 22:23:00','2020-07-16 22:23:00','2020-07-17 22:23:00','2020-07-18 22:23:00','2020-07-19 22:23:00','2020-07-20 22:23:00','2020-07-21 22:23:00','2020-07-22 22:23:00','2020-07-23 22:23:00','2020-07-24 22:23:00','2020-07-25 22:23:00','2020-07-26 22:23:00','2020-07-27 22:23:00','2020-07-28 22:23:00','2020-07-29 22:23:00','2020-07-30 22:23:00','2020-07-31 22:23:00','2020-08-01 22:23:00','2020-08-01 22:23:00','2020-08-02 22:23:00','2020-08-03 22:23:00','2020-08-04 22:23:00','2020-08-05 22:23:00','2020-08-06 22:23:00','2020-08-07 22:23:00','2020-08-08 22:23:00','2020-08-09 22:23:00','2020-08-10 22:23:00','2020-08-11 22:23:00','2020-08-12 22:23:00','2020-08-13 22:23:00','2020-08-14 22:23:00','2020-08-15 22:23:00','2020-08-16 22:23:00','2020-08-17 22:23:00','2020-08-18 22:23:00','2020-08-19 22:23:00','2020-08-20 22:23:00','2020-08-21 22:23:00','2020-08-22 22:23:00','2020-08-23 22:23:00','2020-08-24 22:23:00','2020-08-25 22:23:00','2020-08-26 22:23:00','2020-08-27 22:23:00','2020-08-28 22:23:00','2020-08-29 22:23:00','2020-08-30 22:23:00'],
                y: this.maplblPriceDecision(),
                type:'scatter',
                name: this.priceData[3].key,
                mode: "lines",
                line: {
                  color: "#cd6200"
                }
              },
            ],
            layout: {
              xaxis: {
                autorange: true,
                range: ['2020-01-01', '2020-09-01'],
                rangeselector: {buttons: [
                    {
                      count: 1,
                      label: '1m',
                      step: 'month',
                      stepmode: 'backward'
                    },
                    {
                      count: 6,
                      label: '6m',
                      step: 'month',
                      stepmode: 'backward'
                    },
                    {step: 'all'}
                  ]},
                rangeslider: {range: ['2020-01-01', '2020-09-01'],
                              yaxis:{rangemode:"auto"}},
                type: 'date'
              },
              yaxis: {
                autorange: false,
                range: [98, 320],
                type: 'linear'
              },
              showlegend: false
            }
        };
    }
    ngAfterViewInit() {
        Plotly.newPlot(
            this.myDivContainer.nativeElement,
            this.myDiv.data,
            this.myDiv.layout,
            {displaylogo: false}
        );
    }
    private maplblMaxPrice(){
      let arr=[];
      for (let i=0;i<this.priceData[0].values.length;i++){
        arr.push(this.priceData[0].values[i].y)}
      return(arr);
      } 
    private maplblMinPrice(){
      let arr=[];
      for (let i=0;i<this.priceData[1].values.length;i++){
        arr.push(this.priceData[1].values[i].y)}
      return(arr);
      }
      private maplblCurrentPrice(){
        let arr=[];
        for (let i=0;i<this.priceData[2].values.length;i++){
          arr.push(this.priceData[2].values[i].y)}
        return(arr);
        }  
      private maplblPriceDecision(){
        let arr=[];
        for (let i=0;i<this.priceData[3].values.length;i++){
          arr.push(this.priceData[3].values[i].y)}
        return(arr);
        } 
}