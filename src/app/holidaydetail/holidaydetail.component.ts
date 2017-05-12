import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { HolidayService} from '../services/holiday.service';

@Component({
  selector: 'app-holidaydetail',
  templateUrl: './holidaydetail.component.html',
  styleUrls: ['./holidaydetail.component.css']
})
export class HolidaydetailComponent implements OnInit {
   @Input()
    holiday: any;
  constructor(private holidayService: HolidayService,private router: Router) { 
      this.holiday = holidayService.getHoliday();
  }
  goBack(): void {
      this.router.navigate(['./']);
  }

  ngOnInit() {
  }

}
