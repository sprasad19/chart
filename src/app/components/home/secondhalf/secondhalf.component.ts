import 'rxjs/add/operator/map';
import { DataService } from './../../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-secondhalf',
  templateUrl: './secondhalf.component.html',
  styleUrls: ['./secondhalf.component.css']
})
export class SecondhalfComponent implements OnInit {
  chart = [];
  chart2 = [];

   pressure_machine_1: any;
   temp_machine_1: any;
   date: any;
   temp_machine_2: any;
   pressure_machine_2: any;
  //  tempdate: any;
  //  jsdate: any;
  constructor(private dataService: DataService, private rest: RestService) {}

  ngOnInit() {
    this.mytemp();
    this.mypressure();

  //  this.tempratureandpressure();

 }
  async mypressure() {
    try {
      this.rest.pressure().subscribe(res => {
        this.date = res.date;
       this.pressure_machine_1 = res.pressure_machine_1;
       this. pressure_machine_2 = res.pressure_machine_2;
        this.chart2 = new Chart('chart', {
          type: 'line',
           data: {
            labels: this.date ,
            datasets: [
              {label: 'Pressure 1',
                data: this.pressure_machine_1,
                borderColor: 'yellow',
                fill: false

              },
              {
                label: 'Pressure 2',
                data: this.pressure_machine_2,
                borderColor: 'green',
                fill: false
              },
            ]
          },
          options: {
            legend: {
              display: true,

            },
            scales: {
              xAxes: [{
                display: true,
                label: 'x'

              }],
              yAxes: [{
                display: true
              }],
            }
          }
        });
      });
    } catch (error) {
      this.dataService.error('Can not get Temprature data');
    }
  }

  async mytemp() {
    try {
      this.rest.temprature().subscribe(res => {
        this.date = res.date;
        this.temp_machine_1 = res.temp_machine_1;
        this.temp_machine_2 = res.temp_machine_2;
        // console.log(date);


        this.chart = new Chart('chart2', {
          type: 'line',
           data: {
            labels: this.date ,
            datasets: [
              {
                label: 'Temprature 1',
                data: this.temp_machine_1,
                borderColor: '#ffcc00',
                fill: false

              },
              {
                label: 'Temprature 2',
                data: this.temp_machine_2,
                borderColor: '#F73465',
                fill: false
              },
            ]
          },
          options: {
            legend: {
              display: true,

            },
            scales: {
              xAxes: [{
                display: true,

              }],
              yAxes: [{
                display: true
              }],
            }
          }
        });

      });


    } catch (error) {
      this.dataService.error('Can not get Temprature data');
    }
  }


  // async tempratureandpressure() {
  //   this.rest.temprature().subscribe(res => {
  //     this.date = res.date;
  //     this.temp_machine_1 = res.temp_machine_1;
  //     this.temp_machine_2 = res.temp_machine_2;
  //   });
  //   this.rest.pressure().subscribe(res => {
  //     this.date = res.date;
  //    this.pressure_machine_1 = res.pressure_machine_1;
  //    this. pressure_machine_2 = res.pressure_machine_2;
  //   });
  //   this.chart = new Chart('chart', {
  //     type: 'line',
  //      data: {
  //       labels: this.date ,
  //       datasets: [
  //         {
  //           data: this.temp_machine_1,
  //           borderColor: '#ffcc00',
  //           fill: false

  //         },
  //         {
  //           data: this.temp_machine_2,
  //           borderColor: '#F73465',
  //           fill: false
  //         },
  //         {
  //           data: this.pressure_machine_1,
  //           borderColor: '#F73465',
  //           fill: false
  //         },
  //         {
  //           data: this.pressure_machine_2,
  //           borderColor: '#F73465',
  //           fill: false
  //         },
  //       ]
  //     },
  //     options: {
  //       legend: {
  //         display: false,

  //       },
  //       scales: {
  //         xAxes: [{
  //           display: true,

  //         }],
  //         yAxes: [{
  //           display: true
  //         }],
  //       }
  //     }
  //   });
  // }

}
