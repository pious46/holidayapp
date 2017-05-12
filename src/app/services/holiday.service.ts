import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import {Jsonp} from '@angular/http';
import 'rxjs/add/operator/toPromise';
@Injectable()
export class HolidayService {
  private headers = new Headers({'Content-Type': 'application/json'});
  private apikey = '316dacca-b929-4cb1-af8f-96edfb059db1';
  private holidaysurl = 'https://holidayapi.com/v1/holidays?key='+ this.apikey;  // URL to web api
  private shareddata={};
  constructor(private http: Http) { }

getHolidays(country,year,month): Promise<any> {
    return this.http.get(this.holidaysurl+'&country='+country+'&year='+year+'&month='+month)
               .toPromise()
               .then(response => response.json().holidays)
               .catch(this.handleError);
  }

  saveData(holiday){
    console.log('save data function called');
    this.shareddata = holiday;
  }
  getHoliday(): any {
    return this.shareddata;
  }

 private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}