import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Mission, MissionAdapter } from "./mission.model";
import { Observable, of } from "rxjs";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class MissionService {
    private apiURL = "https://api.spacexdata.com/v3/launches";

    constructor(private http: HttpClient, private adapter: MissionAdapter) {}

  list(): Observable<Mission[]> {
    const url = `${this.baseURL}/`;
    return this.http.get(url).pipe(
        map((data: any[]) => data.map((item) => this.adapter.adapt(item)))
    );
  }
}