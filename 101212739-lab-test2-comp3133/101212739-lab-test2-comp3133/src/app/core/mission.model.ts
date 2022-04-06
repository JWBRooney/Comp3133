import { Injectable } from "@angular/core";
import { Adapter } from "./adapter";

export class Mission {
    constructor(
        public mission_name: string,
        public launch_year: number,
        public details: string,
        public mission_patch_small: HTMLImageElement
    ){}
}

@Injectable({
    providedIn: "root",
})
export class MissionAdapter implements Adapter<Mission> {
    adapt(item: any): Mission {
        return new Mission(item.mission_name, item.launch_year, item.details, item.mission_patch_small)
    }
}