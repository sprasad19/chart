import { DataService } from './../../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-firsthalf',
  templateUrl: './firsthalf.component.html',
  styleUrls: ['./firsthalf.component.css']
})
export class FirsthalfComponent implements OnInit {
  // https://gitlab.com/snippets/1872663/raw = Temp
  // https://gitlab.com/snippets/1872664/raw == pressure
  constructor(private dataService: DataService, private rest: RestService) {}
  temprature: any;
  pressure1: any;

  ngOnInit() {
    this.temp();
    this.pressure();
  }
  async temp() {
    try {
      const data = await this.rest.get(
        'https://gitlab.com/snippets/1872663/raw'
      );
      if (data) {
        this.temprature = data;
      }
    } catch (error) {
      this.dataService.error('Could Not get data from server');
    }
  }
  async pressure() {
    try {
      const data = await this.rest.get(
        'https://gitlab.com/snippets/1872664/raw'
      );
      if (data) {
        this.pressure1 = data;
      }
    } catch (error) {
      this.dataService.error('Could Not get data from server');
    }
  }
}
