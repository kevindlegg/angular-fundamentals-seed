import { Component } from '@angular/core';
interface Passenger {
  id: number,
  fullname: string,
  checkedIn: boolean
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
        </li>
      </ul>
      <h3>Airline Passengers</h3>
      <ul>
        <li *ngFor="let passenger of passengers; let i = index;">
        <span 
          class="status"
          [ngClass]="{
            'checked-in': passenger.checkedIn,
            'checked-out': !passenger.checkedIn
          }"></span>
          {{ i + 1 }}: {{ passenger.fullname }}
        </li>
      </ul>
    </div>
  `
})

export class AppComponent {
  passengers: Passenger[] = [{
    id: 1,
    fullname: "Stephen",
    checkedIn: true
  },
  {
    id: 2,
    fullname: "Bobbi",
    checkedIn: false
  },
  {
    id: 3,
    fullname: "Shelbi",
    checkedIn: true
  },
  {
    id: 4,
    fullname: "Tucker",
    checkedIn: true
  },
  {
    id: 5,
    fullname: "Kevin",
    checkedIn: false
  }
  ]
}