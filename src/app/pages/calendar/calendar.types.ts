export type CalendarViewType = 'D' | 'W' | 'M' | 'Y';

export interface ICalendarView {
  value: string;
  label: string;
}

export interface ICalendarDays {
  D: number;
  W: number;
  M: number;
  Y: number;
}

export interface IDayGrid {
  label: string;
}

export interface IDayGrids {
  details: {
    label: string;
  };
  grid: IDayGrid[];
}
