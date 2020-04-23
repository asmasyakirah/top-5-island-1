import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ChartDataSets } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit {

  @Input() island_name1: any;
  @Input() island_name2: any;
  @Input() island_name3: any;
  @Input() island_name4: any;
  @Input() island_name5: any;
  @Input() visit_count1: any;
  @Input() visit_count2: any;
  @Input() visit_count3: any;
  @Input() visit_count4: any;
  @Input() visit_count5: any;
  @Input() isGraph: any;

  apiBaseUrl: string = "http://localhost/";
  apiUrl: string = this.apiBaseUrl+"/top5island_api/api/getTop5ByDate.php?d=";

  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels:string[] = ['Island 1', 'Island 2', 'Island 3', 'Island 4', 'Island 5'];
  public barChartType:string = 'horizontalBar';
  public barChartColors: Color[] = [
    {
      backgroundColor: [
        '#59d3de',
        '#ccd63f',
        '#ed7179',
        '#fea444',
        '#971b5a'
      ]
    }
  ];
  public barChartLegend:boolean = false;
  
  public barChartData:any[] = [
    {data: [0, 0, 0, 0, 0], label: 'visits'},
  ];

  constructor(private http: HttpClient) {
    // Update result for first time
    this.updateResult('2017-03-01');
  }

  ngOnInit() {
  }

  public updateResult(selectedDate: string):void{

    // Call API
    this.http.get(this.apiUrl+selectedDate).subscribe(res => {
    
      // // Show API result
      // const data = res;
      // console.log(data);

      // const history = [65, 22, 80, 81, 43];

      // this.barChartData[0].data = [];

      // for (let h of history) {
      //   this.barChartData[0].data.push(h);
      // }

      // Show API result
      const success = res['success'];
      const message = res['message'];
      const result = res['result'];
      const islandNames = [];
      const visitCount = [];
 
      this.barChartLabels = [];
      this.barChartData[0].data = [];
 
      for (let r of result) {

        // Update list
        // this.island_name = r['island_name'];
        // this.visit_count = r['visit_count'];
        islandNames.push(r['island_name']);
        visitCount.push(r['visit_count']);

        // Update graph
          this.barChartLabels.push(r['island_name']);
          this.barChartData[0].data.push(r['visit_count']);
      }

      this.island_name1 = islandNames[0];
      this.island_name2 = islandNames[1];
      this.island_name3 = islandNames[2];
      this.island_name4 = islandNames[3];
      this.island_name5 = islandNames[4];
      this.visit_count1 = visitCount[0] + " visits";
      this.visit_count2 = visitCount[1] + " visits";
      this.visit_count3 = visitCount[2] + " visits";
      this.visit_count4 = visitCount[3] + " visits";
      this.visit_count5 = visitCount[4] + " visits";

    });
  }

  dateChanged(ev: any) {
    
    // Show date changed data
    // console.log('Date changed', ev);

    // Remove the timestamp
    var selectedDate = ev.detail.value.split('T')[0]; 
    // console.log(selectedDate);

    // Update result each time date changed
    this.updateResult(selectedDate);    
  }

  segmentChanged(ev: any) {
    console.log('Segment changed', ev);
    if(ev.detail.value=="graph")
    {
      this.isGraph = true; // Show graph 
    }
    else{
      this.isGraph = false; // Show list

    }
  }
  
  // events
  public chartClicked(e:any):void {
    // console.log(e);
  }
  
  public chartHovered(e:any):void {
    // console.log(e);
  }

}
