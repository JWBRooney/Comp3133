import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingComponent } from './booking/booking.component';
import { ListingComponent } from './listing/listing.component';

const routes: Routes = [
  {path: 'listings', component: ListingComponent},
  {path: 'bookings', component: BookingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }