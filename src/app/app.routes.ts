import { Routes } from '@angular/router';

import { HolidaylistComponent } from './holidaylist/holidaylist.component';

import { HolidaydetailComponent } from './holidaydetail/holidaydetail.component';


export const ROUTES: Routes = [
    {
        path: '',
        component: HolidaylistComponent
  },
   {
        path: 'holiday-detail',
        component: HolidaydetailComponent
  }
];
