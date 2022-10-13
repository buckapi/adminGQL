import { Component, OnInit } from '@angular/core';
import {BRANCHS} from '@app/services/branchs.service';
import {CARDS} from '@app/services/cards.service';
import dayjs, { Dayjs } from 'dayjs/esm';
//import { DateRange, DateRanges, TimePeriod } from '../../../../src/daterangepicker/daterangepicker.component';

 export interface TimePeriod {
  [index: string]: Dayjs;

  startDate: Dayjs;
  endDate: Dayjs;
}
 export interface DateRanges {
  [index: string]: [Dayjs, Dayjs];
}
 export interface DateRange {
   label: string;
  dates: [Dayjs, Dayjs];
}
@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

 public branchs:any=[];
  public cards:any=[];
  selected: TimePeriod;
  alwaysShowCalendars: boolean;
  showRangeLabelOnInput: boolean;
  keepCalendarOpeningWithRange: boolean;
  maxDate: dayjs.Dayjs;
  minDate: dayjs.Dayjs;
  
  invalidDates: dayjs.Dayjs[] = [];
  tooltips = [
    { date: dayjs(), text: 'Today is just unselectable' },
    { date: dayjs().add(2, 'days'), text: 'Yeeeees!!!' }
  ];

  inlineDateTime: TimePeriod;
  ranges: DateRanges = {
    ['Hoy']: [dayjs(), dayjs()],
    ['Ayer']: [dayjs().subtract(1, 'days'), dayjs().subtract(1, 'days')],
    ['Últimos 7 Días']: [dayjs().subtract(6, 'days'), dayjs()],
    ['Últimos 30 Días']: [dayjs().subtract(29, 'days'), dayjs()],
    ['Este mes']: [dayjs().startOf('month'), dayjs().endOf('month')],
    ['último mes']: [dayjs().subtract(1, 'month').startOf('month'), dayjs().subtract(1, 'month').endOf('month')],
    ['últimos 3 meses']: [dayjs().subtract(3, 'month').startOf('month'), dayjs().subtract(1, 'month').endOf('month')]
  };

  constructor() { 
   this.maxDate = dayjs().add(2, 'weeks');
    this.minDate = dayjs().subtract(3, 'days');

    this.alwaysShowCalendars = true;
    this.keepCalendarOpeningWithRange = true;
    this.showRangeLabelOnInput = true;
    this.selected = {
      startDate: dayjs().subtract(1, 'days').set('hours', 0).set('minutes', 0),
      endDate: dayjs().subtract(1, 'days').set('hours', 23).set('minutes', 59)
    };
 this.branchs=BRANCHS;
  this.cards=CARDS
 

  }
  isInvalidDate = (m: dayjs.Dayjs): boolean => {
    return this.invalidDates.some((d) => d.isSame(m, 'day'));
  };

  isTooltipDate = (m: Dayjs): string | boolean | null => {
    const tooltip = this.tooltips.find((tt) => tt.date.isSame(m, 'day'));
    if (tooltip) {
      return tooltip.text;
    } else {
      return false;
    }
  };

  rangeClicked(range: DateRange): void {
    // eslint-disable-next-line no-console
    console.log('[rangeClicked] range is : ', range);
  }

  datesUpdated(range: TimePeriod): void {
    // eslint-disable-next-line no-console
    console.log('[datesUpdated] range is : ', range);
  }

  chosenDateTime(e: TimePeriod): void {
    this.inlineDateTime = e;
  }
  ngOnInit(): void {

  }

}
