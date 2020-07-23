import { Injectable } from '@angular/core';
import * as moment from 'moment';


@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }

  get date() {
    return moment().format('dddd, MMMM D YYYY');
  }

  get time() {
    return moment().format('h:mm:ss a');
  }

}
