
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import {JsonpModule} from '@angular/http';
import {ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from '@angular/material';
import { ROUTES } from './app.routes';
import { AppComponent } from './app.component';
import { HolidaylistComponent } from './holidaylist/holidaylist.component';
import { HolidaydetailComponent } from './holidaydetail/holidaydetail.component';


import { HolidayService} from './services/holiday.service';

@NgModule({
  declarations: [
    AppComponent,
    HolidaylistComponent,
    HolidaydetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    MaterialModule.forRoot(),
    RouterModule.forRoot(ROUTES, { useHash: true }),
    BrowserAnimationsModule
  ],
  providers: [ HolidayService],
  bootstrap: [AppComponent]
})
export class AppModule { }
