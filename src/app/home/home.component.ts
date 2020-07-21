import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import * as Chart from 'chart.js';

// import { DatabaseService } from '../../common/core/service/database.service';
import { SharedService } from '../_common/services/shared.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

  @ViewChild('chart') chart: ElementRef;

  datetime: any = {};
  analyze: any = {};

  control: any = {};

  constructor(
    private shared: SharedService,
    // private database: DatabaseService
  ) {
    this.datetime.date = this.shared.date;
    this.datetime.time = this.shared.time;

    this.analyze.isStart = false;
    this.analyze.isAgain = true;

    this.control.sampleCtrl = new FormControl('485 nm');
    this.control.referenceCtrl = new FormControl('517 nm');
    this.control.netChangeCtrl = new FormControl('517 nm');
    this.control.transmittanceCtrl = new FormControl('0.02254312');
    this.control.perTransmittanceCtrl = new FormControl('92%');
    this.control.absorbanceCtrl = new FormControl('0.9613215');
    this.control.concentrationCtrl = new FormControl('44.336 g/mol');
    this.control.rsaCtrl = new FormControl('44%');

    this.control.sampleIntensityCtrl = new FormControl('485 nm');
    this.control.sampleTransmittanceCtrl = new FormControl('517 nm');
    this.control.sampleAbsorbanceCtrl = new FormControl('0.9613215');

    this.control.referenceIntensityCtrl = new FormControl('485 nm');
    this.control.referenceTransmittanceCtrl = new FormControl('517 nm');
    this.control.referenceAbsorbanceCtrl = new FormControl('0.9613215');
  }

  ngOnInit() {

    // this.database.run();

    // this.database.tslOne.subscribe((response) => {
    //   console.log('one: ', response);
    // });
    //
    // this.database.tslTwo.subscribe((response) => {
    //   console.log('two: ', response);
    // });

    this.control.sampleCtrl.disable();
    this.control.referenceCtrl.disable();
    this.control.netChangeCtrl.disable()
    this.control.transmittanceCtrl.disable()
    this.control.perTransmittanceCtrl.disable()
    this.control.absorbanceCtrl.disable()
    this.control.concentrationCtrl.disable()
    this.control.rsaCtrl.disable()

    this.control.sampleIntensityCtrl.disable()
    this.control.sampleTransmittanceCtrl.disable()
    this.control.sampleAbsorbanceCtrl.disable()

    this.control.referenceIntensityCtrl.disable()
    this.control.referenceTransmittanceCtrl.disable()
    this.control.referenceAbsorbanceCtrl.disable()
  }

  ngAfterViewInit() {

    setInterval(() => {
      this.datetime.time = this.shared.time;
    }, 1000);

    new Chart('lineChart', {
      type: 'line',
      data: {
        labels: [ '0', 'x', '2x', '3x', '4x', '5x' ],
        datasets: [{
          label: '%Transmittance per solution',
          backgroundColor: 'red',
          borderColor: 'red',
          hoverBackgroundColor: 'red',
          borderWidth: 1,
          borderDash: [ 0, 0 ],
          borderDashOffset: 1,
          borderCapStyle: 'round',     //"butt" || "round" || "square"
          borderJoinStyle: 'round',    // "bevel" || "round" || "miter"
          fill: false,
          cubicInterpolationMode: 'default',
          lineTension: 0.2,
          pointRadius: 4,
          pointStyle: 'circle',
          pointHitRadius: 50,
          pointHoverBackgroundColor: 'green',
          pointHoverBorderColor: 'lime',
          pointHoverBorderWidth: 25,
          // pointHoverRadius: 25,
          showLine: true,
          spanGaps: true, // IDK
          steppedLine: false,
          data: [ 9, 7, 3, 5, 2, 10 ],
        }]
      },
      options: {
        title: {
          display: true,
          text: 'Transmittance',
          fontColor: 'antiquewhite'
        },
        scales: {
          yAxes: [{
            stacked: true,
            scaleLabel: {
              display: true,
              labelString: '% Transmittance',
              fontColor: 'antiquewhite'
            },
            ticks: {
              beginAtZero: true,
              callback: (value, index, values) => value,
              fontColor: 'antiquewhite'
            },
          }],
          xAxes: [{
            stacked: true,
            scaleLabel: {
              display: true,
              labelString: 'Concentration',
              fontColor: 'antiquewhite'
            },
            ticks: {
              beginAtZero: true,
              callback: (value, index, values) => value,
              fontColor: 'antiquewhite'
            }
          }]
        }
      }
    });

  }

  startAnalyze() {
    this.analyze.isAgain = false;
  }

  analyzeAgain() {
  }

}
