import { ICalendarDays, IDayGrid } from './calendar.types';

export const CALENDAR_VIEWS = [
  { value: 'D', label: 'Day' },
  { value: 'W', label: 'Week' },
  { value: 'M', label: 'Month' },
  { value: 'Y', label: 'Year' },
];

export const CALENDAR_DAYS: ICalendarDays = {
  D: 1,
  W: 7,
  M: 31,
  Y: 365,
};

export const DAY_GRID: IDayGrid[] = [
  { label: '0 AM' },
  { label: '1 AM' },
  { label: '2 AM' },
  { label: '3 AM' },
  { label: '4 AM' },
  { label: '5 AM' },
  { label: '6 AM' },
  { label: '7 AM' },
  { label: '8 AM' },
  { label: '9 AM' },
  { label: '10 AM' },
  { label: '11 AM' },
  { label: '12 PM' },
  { label: '1 PM' },
  { label: '2 PM' },
  { label: '3 PM' },
  { label: '4 PM' },
  { label: '5 PM' },
  { label: '6 PM' },
  { label: '7 PM' },
  { label: '8 PM' },
  { label: '9 PM' },
  { label: '10 PM' },
  { label: '11 PM' },
  { label: '12 AM' },
];
