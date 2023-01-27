import { Route } from '@angular/router';

export const ROUTES: Route[] = [
  {
    path: '',
    title: 'Calendar',
    loadComponent: async () => (await import('./calendar.page')).CalendarPage,
  },
];
