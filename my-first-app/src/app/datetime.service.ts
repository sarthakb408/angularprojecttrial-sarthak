import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatetimeService {

  constructor() { }
  today = new Date();
  studentdata = [10, 20, 30];
}
