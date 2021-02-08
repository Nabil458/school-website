import { EventInput } from '@fullcalendar/angular';

let eventGuid = 0;
/*ici on peut ajouter les évenement depuis le type script vers notre calendrier*/

export const INITIAL_EVENTS: EventInput[] = [
  {
    id: createEventId(),
    title: 'All-day event',
    start: new Date('February 09, 2021 20:15:30'),
    end: new Date('February 09, 2021 21:15:30')
  },
  {
    id: createEventId(),
    title: 'Timed event',
    start: new Date('February 10, 2021 09:15:30'),
    end: new Date('February 10, 2021 12:15:30')
  }
];
/*-------------------------------------------------*/
export function createEventId() {
  return String(eventGuid++);
}
