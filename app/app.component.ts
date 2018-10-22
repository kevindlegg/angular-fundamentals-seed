import { Component } from '@angular/core';
interface Child {
  name: string,
  age: number
}

interface Passenger {
  id: number,
  fullname: string,
  checkedIn: boolean,
  checkedInDate: number | null
  children: Child[] | null
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
          <div class="date">
            Check in date: 
            {{ passenger.checkedInDate ? (passenger.checkedInDate | date: 'yMMMMd' | uppercase) : 'Not checked in' }}
          </div>
          <div class="children">
            Children: {{ passenger.children?.length || 0 }}
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
    checkedInDate: 149742000000,
    children: null
  },
  {
    id: 2,
    fullname: "Bobbi",
    checkedIn: false,
    checkedInDate: null,
    children: [{ name: 'Chloe', age: 7 }]
  },
  {
    id: 3,
    fullname: "Shelbi",
    checkedIn: true,
    checkedInDate: 148742000000,
    children: null
  },
  {
    id: 4,
    fullname: "Tucker",
    checkedIn: true,
    checkedInDate: 146742000000,
    children: null
  },
  {
    id: 5,
    fullname: "Kevin",
    checkedIn: false,
    checkedInDate: null,
    children: [{ name: 'Tucker', age: 21 },{ name: 'Shelbi', age: 24 }]
  }
  ]
}