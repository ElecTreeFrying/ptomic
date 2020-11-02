import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { FirebaseService } from '../_common/services/firebase.service';
import { SharedService } from '../_common/services/shared.service';

import { DataComponent } from '../_components/dialogs/data/data.component';
import { GraphsComponent } from '../_components/dialogs/graphs/graphs.component';


@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {

  time: string;
  database: any;
  isLoading: boolean;

  constructor(
    private dialog: MatDialog,
    private fire: FirebaseService,
    public shared: SharedService
  ) { }

  ngOnInit(): void {
    
    this.time = this.shared.time;
    
    setInterval(() => {
      this.time = this.shared.time;
    }, 1000);

    setTimeout(() => {
      this.isLoading = false;
    }, 5000);

    this.database = {};
    this.database.latestReadings = null;
    this.database.sample = '0 nm';
    this.database.reference = '0 nm';
    this.isLoading = true;
  }

  readLatest() {

    // this.fire.testPush();
    this.test();

    // this.database.latestReadings = this.fire.latestReadings.subscribe((res) => {
    
    //   this.database.latestReadings.unsubscribe();

    //   this.database.sample = res.sample + ' nm';
    //   this.database.reference = res.reference + ' nm';
    
    // });
  }

  showData(data: number = 0) {
    this.dialog.open(DataComponent, { data });
  }
  
  showGraph() {
    this.dialog.open(GraphsComponent);
  }

  refresh() {
    this.test();
    this.database.sample = '0 nm';
    this.database.reference = '0 nm';
  }

  test() {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
    }, 1000);
  }

}
