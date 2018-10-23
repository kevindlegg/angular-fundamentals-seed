import { Component, OnInit } from '@angular/core';

import { Passenger } from '../../models/passenger.interface';

@Component({
  selector: 'passenger-dashboard',
  styleUrls: ['passenger-dashboard.component.scss'],
  template: `
    <div>
      <passenger-count
        [items]='passengers'>
      </passenger-count>
      <div *ngFor="let passenger of passengers;">
        {{ passenger.fullname }}
      </div>
      <passenger-detail
        *ngFor="let passenger of passengers;"
        [detail]="passenger"
        (edit)="handleEdit($event)"
        (remove)="handleRemove($event)">
      </passenger-detail>
    </div>
  `
})
export class PassengerDashboardComponent implements OnInit {
  passengers: Passenger[];
  constructor() {}
  ngOnInit() {
    console.log('ngOnInit');
    this.passengers  = [{
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
    }]
  }
  handleEdit(event: Passenger) {
    this.passengers = this.passengers.map((passenger: Passenger) => {
      if (passenger.id === event.id) {
        passenger = Object.assign({}, passenger, event);
      }
      return passenger;
    });
  }
  handleRemove(event: Passenger) {
    this.passengers = this.passengers.filter((passenger: Passenger) => {
      return passenger.id !== event.id;
    });
  }
}