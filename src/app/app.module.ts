import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { PiechartComponent } from './piechart.component';
import { LinechartComponent } from './linechart.component';

import { GridsterModule } from 'angular-gridster2';
import { ChartModule, HIGHCHARTS_MODULES } from 'angular-highcharts';

@NgModule({
  imports:      [ BrowserModule, FormsModule, GridsterModule, ChartModule ],
  declarations: [ AppComponent, HelloComponent, PiechartComponent, LinechartComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
