import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Passenger } from './models/passenger.interface';

@Injectable()
export class PassengerDashboardService {
  constructor(private http: Http) {}

  getPassengers(): Passenger[] {
    return [{
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
}