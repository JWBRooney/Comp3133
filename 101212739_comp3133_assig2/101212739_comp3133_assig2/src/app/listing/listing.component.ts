import { Component, OnInit } from '@angular/core';
import { Listing } from '../listing';
import { LISTINGS } from '../mock-listings';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {

  listings = LISTINGS;

  constructor() { }

  ngOnInit(): void {
  }

}
