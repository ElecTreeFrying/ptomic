import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, SnapshotAction } from '@angular/fire/database';
import { map, flatMap, switchMap, exhaustMap } from 'rxjs/operators'

import * as decodeFirebasePushID  from "@jengjeng/firebase-pushid-convert-timestamp";
import * as moment  from "moment";


 @Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  readings: AngularFireList<any>;
  test: AngularFireList<any>;

  constructor(
    private db: AngularFireDatabase
  ) { 
    this.readings = db.list<any>('logs');
    this.test = db.list<any>('test');
  }

  private get random() {
    // const min = Math.ceil(500);
    // const max = Math.floor(520);
    const min = 508;
    const max = 530;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  testPush() {
    this.readings.push({ 
      sample: this.random, 
      reference: this.random
    })
  }

  listener() {
    return this.readings.snapshotChanges().pipe(
      map((value: SnapshotAction<any>[]) => {
        return value.map((doc: SnapshotAction<any>) => {
          this.test.remove();
        });
      }),
    ).subscribe(() => 0); 
  }

  get allReadings() {
    return this.readings.snapshotChanges().pipe(
      map((value: SnapshotAction<any>[]) => {
        return value.map((doc: SnapshotAction<any>) => {
          return {
            // reading: doc.payload.toJSON()['data'] + ' nm',
            reading: this.random + ' nm',
            datetime: this.toTimeFormat(doc.key)
          };
        }).reverse().slice(0, 11);
      }),
    ) 
  }

  get latestReadings() {
    return this.readings.snapshotChanges().pipe(
      map((value: SnapshotAction<any>[]) => {
        const doc = value[value.length - 1];
        return {
          // reading: doc.payload.toJSON()['data'] + 'nm',
          reading: this.random + 'nm',
          datetime: this.toTimeFormat(doc.key)
        };
      }),
    )
  }

  private toTimeFormat(pushID: string) {
    const timestamp = decodeFirebasePushID(pushID).timestamp.toString();
    return moment.unix(Number(timestamp.slice(0, -3))).format("MM/DD/YY : hh:mm:ss A");
  }

}
