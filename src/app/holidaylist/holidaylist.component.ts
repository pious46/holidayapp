import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HolidayService} from '../services/holiday.service';


@Component({
  selector: 'app-holidaylist',
  templateUrl: './holidaylist.component.html',
  styleUrls: ['./holidaylist.component.css']
})
export class HolidaylistComponent implements OnInit {
  holidays: any[];
  country = 'US';
  month ='05';
  year ='2016';
  constructor(private holidayService: HolidayService, private router: Router) { }

   getHolidays(country,year,month): void {
    this.holidayService
        .getHolidays(country,year,month)
        .then(resp=> this.holidays = resp);
}
  gotoDetail(holiday):void{
      this.holidayService.saveData(holiday);
      this.router.navigate(['./holiday-detail']);
  }

  ngOnInit() {
   this.getHolidays(this.country,this.year,this.month);
  }

}
