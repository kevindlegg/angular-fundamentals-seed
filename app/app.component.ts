import { Component } from '@angular/core';
interface Passenger {
  id: number,
  fullname: string,
  checkedIn: boolean,
  checkedInDate?: number
}

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <div class="app">
      <h3>Airline Passengers</h3>
      <ul>
        <li *ngFor="let passenger of passengers; let i = index;">
        <span 
          class="status"
          [class.checked-in]="passenger.checkedIn"></span>
          {{ i + 1 }}: {{ passenger.fullname }}
          <p>{{ passenger | json}}</p>
          <div class="date">
            Check in date: 
            {{ passenger.checkedInDate ? (passenger.checkedInDate | date: 'yMMMMd' | uppercase) : 'Not checked in' }}
          </div>
        </li>
      </ul>
    </div>
  `
})

export class AppComponent {
  passengers: Passenger[] = [{
    id: 1,
    fullname: "Stephen",
    checkedIn: true,
    checkedInDate: 149742000000
  },
  {
    id: 2,
    fullname: "Bobbi",
    checkedIn: false,
    checkedInDate: null
  },
  {
    id: 3,
    fullname: "Shelbi",
    checkedIn: true,
    checkedInDate: 148742000000
  },
  {
    id: 4,
    fullname: "Tucker",
    checkedIn: true,
    checkedInDate: 146742000000
  },
  {
    id: 5,
    fullname: "Kevin",
    checkedIn: false,
    checkedInDate: null
  }
  ]
}