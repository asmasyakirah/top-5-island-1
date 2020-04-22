import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ChartDataSets } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels:string[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType:string = 'horizontalBar';
  public barChartLegend:boolean = false;
  
  public barChartData:any[] = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
  ];
  
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
  
  public chartHovered(e:any):void {
    console.log(e);
  }
  
  public randomize():void {
    // // Only Change 3 values
    // let data = [
    //   Math.round(Math.random() * 100),
    //   59,
    //   80,
    //   (Math.random() * 100),
    //   56,
    //   (Math.random() * 100),
    //   40];
    // let clone = JSON.parse(JSON.stringify(this.barChartData));
    // clone[0].data = data;
    // this.barChartData = clone;
    /**
     * (My guess), for Angular to recognize the change in the dataset
     * it has to change the dataset variable directly,
     * so one way around it, is to clone the data, change it and then
     * assign it;
     */

    const history = [65, 22, 80, 81, 43, 55, 40];

    this.barChartData[0].data = [];

    for (let h of history) {
      this.barChartData[0].data.push(h);
    }
  }

  constructor() {
  }

  // // Data
  // chartData: ChartDataSets[] = [{ data: [], label: 'Stock price' }];
  // chartLabels: Label[];
 
  // // Options
  // chartOptions = {
  //   responsive: true,
  //   title: {
  //     display: true,
  //     text: 'Historic Stock pricee'
  //   },
  //   pan: {
  //     enabled: true,
  //     mode: 'xy'
  //   },
  //   zoom: {
  //     enabled: true,
  //     mode: 'xy'
  //   }
  // };
  // chartColors: Color[] = [
  //   {
  //     borderColor: '#000000',
  //     backgroundColor: '#ff00ff'
  //   }
  // ];
  // chartType = 'line';
  // showLegend = false;
 
  // // For search
  // stock = '';
 
  // constructor(private http: HttpClient) {
  // }
 
  // getData() {
  //     this.http.get(`https://financialmodelingprep.com/api/v3/historical-price-full/${this.stock}?from=2018-03-12&to=2019-03-12`).subscribe(res => {
  //     const history = res['historical'];
 
  //     this.chartLabels = [];
  //     this.chartData[0].data = [];
 
  //     for (let entry of history) {
  //       this.chartLabels.push(entry.date);
  //       this.chartData[0].data.push(entry['close']);
  //     }
  //   });
  // }
 
  // typeChanged(e) {
  //   const on = e.detail.checked;
  //   this.chartType = on ? 'line' : 'bar';
  // }

}
