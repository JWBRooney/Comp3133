import { Component, OnInit } from '@angular/core';
import { Booking } from '../booking';
import {BOOKINGS} from '../mock-bookings';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  bookings = BOOKINGS;

  constructor() { }

  ngOnInit(): void {
  }

}
