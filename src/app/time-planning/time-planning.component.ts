import { Component, OnInit } from '@angular/core';
import { CalendarOptions, DateSelectArg, EventClickArg} from '@fullcalendar/angular';
import { INITIAL_EVENTS, createEventId } from './event-utils';


@Component({
  selector: 'app-time-planning',
  templateUrl: './time-planning.component.html',
  styleUrls: ['./time-planning.component.css']
})
export class TimePlanningComponent implements OnInit {
  calendarVisible = true;
  /*les paramétres du calendrier*/
  calendarOptions: CalendarOptions = {
    headerToolbar: {
      left: 'prev,next',
      center: 'title',
      right: 'timeGridWeek,timeGridDay'
    },
    initialView: 'timeGridWeek',
    initialEvents: INITIAL_EVENTS,
    weekends: true,
    editable: true,
    selectable: true,
    selectMirror: true,
    dayMaxEvents: true,
    select: this.handleDateSelect.bind(this),
    eventClick: this.handleEventClick.bind(this),
  };
  /*----------------------------------------------*/
  /*pour visualiser plusieurs grades*/
  handleCalendarToggle() {
    this.calendarVisible = !this.calendarVisible;
  }
  /*-------------------------------*/
  /*pour enlever samedi et dimanche de calandrier*/
  handleWeekendsToggle() {
    const { calendarOptions } = this;
    calendarOptions.weekends = !calendarOptions.weekends;
  }
  /*-------------------------------*/
  /*       le role de ses fonctions est de rendre possible de :
    Sélectionnez des dates et vous serez invité à créer un nouvel événement
    Glisser, déposer et redimensionner les événements
    Cliquez sur un événement pour le supprimer
    */
  /*ajouter un évenement en cliquant sur le calendrier*/
  handleDateSelect(selectInfo: DateSelectArg) {
    const title = prompt('Please enter a new title for your event');
    const calendarApi = selectInfo.view.calendar;

    calendarApi.unselect();

    if (title) {
      calendarApi.addEvent({
        id: createEventId(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay

      });
      console.log(calendarApi.getEvents);

    }
  }
/*-------------------------------*/
/*suprimer un évenement en cliquant sur cet derniér*/
  handleEventClick(clickInfo: EventClickArg) {
    if (confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
      clickInfo.event.remove();
    }
  }
/*-------------------------------*/
  constructor() { }

  ngOnInit(): void {
  }

}
