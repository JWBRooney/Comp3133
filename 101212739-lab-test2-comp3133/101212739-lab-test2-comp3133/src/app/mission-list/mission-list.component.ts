import { Component, OnInit } from '@angular/core';
import { Mission } from '../core/mission.model';


@Component({
  selector: 'app-mission-list',
  templateUrl: './mission-list.component.html',
  styleUrls: ['./mission-list.component.css']
})
export class MissionListComponent implements OnInit {

  missions: Mission[];

  constructor() {
    this.missions = [];
   }

  ngOnInit(): void {
  }

}
