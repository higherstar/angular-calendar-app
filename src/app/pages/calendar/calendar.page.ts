import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Subject } from 'rxjs';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { CALENDAR_DAYS, CALENDAR_VIEWS, DAY_GRID } from './calendar.constants';
import { CalendarViewType, ICalendarView, ICalendarDays, IDayGrids } from './calendar.types';

@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
    MatSelectModule,
    MatToolbarModule,
    MatButtonModule,
    MatDatepickerModule,
    MatCardModule,
    MatNativeDateModule,
    // MatSidenavModule,
  ],
  templateUrl: './calendar.page.html',
  styleUrls: ['./calendar.page.css'],
})
export class CalendarPage implements OnInit, OnDestroy {
  private _destroy$ = new Subject();

  public calendarView: CalendarViewType = 'W';
  public views: ICalendarView[] = CALENDAR_VIEWS;
  public calendarDays: ICalendarDays = CALENDAR_DAYS;
  public selectedDate: Date = new Date();
  public dayGrid: IDayGrids[] = [];

  constructor() {}

  ngOnInit(): void {
    this.updateDataGrid(this.calendarView);
  }

  ngOnDestroy(): void {
    this._destroy$.complete();
    this._destroy$.unsubscribe();
  }

  updateDataGrid(view: CalendarViewType): void {
    const days = this.calendarDays[view];
    this.dayGrid = [];
    for (let i = 0; i < days; i++) {
      this.dayGrid.push({
        details: {
          label: i.toString(),
        },
        grid: DAY_GRID,
      });
    }
  }
}
