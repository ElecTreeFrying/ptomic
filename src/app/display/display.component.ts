import { Component, OnInit } from '@angular/core';

import { FirebaseService } from '../_common/services/firebase.service';
import { SharedService } from '../_common/services/shared.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {

  time: string;
  database: any;

  constructor(
    private fire: FirebaseService,
    public shared: SharedService
  ) { }

  ngOnInit(): void {
    
    this.time = this.shared.time;
    
    setInterval(() => {
      this.time = this.shared.time;
    }, 1000);

    this.database = {};
    this.database.latestReadings = null;
    this.database.sample = '0 nm';
    this.database.reference = '0 nm';
  }

  readLatest() {

    // this.fire.testPush();

    this.database.latestReadings = this.fire.latestReadings.subscribe((res) => {
    
      this.database.latestReadings.unsubscribe();

      this.database.sample = res.sample + ' nm';
      this.database.reference = res.reference + ' nm';
    
    });
  }

  refresh() {
    this.database.sample = '0 nm';
    this.database.reference = '0 nm';
  }

}
