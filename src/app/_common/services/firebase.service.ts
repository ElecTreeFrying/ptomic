import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { map, flatMap, switchMap, exhaustMap } from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  readings: AngularFireList<any>;

  constructor(
    private db: AngularFireDatabase
  ) { 
    this.readings = db.list<any>('readings');
  }

  get random() {
    const min = Math.ceil(500);
    const max = Math.floor(520);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  testPush() {
    this.readings.push({ 
      sample: this.random, 
      reference: this.random
    })
  }

  get latestReadings() {

    return this.readings.valueChanges().pipe(
      map((value: any[]) => {
        return value[value.length - 1];
      }),
    )
  }

}
