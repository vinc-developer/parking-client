import { Injectable } from '@angular/core';
import {ParkingInfo} from "./parkingInfo";
import {Observable} from "rxjs";
import {HttpClient} from '@angular/common/http';
import {map} from "rxjs/operators";
import {environment} from "../environments/environment.prod";

@Injectable({
  providedIn: 'root'
})
export class ParkingService {

  constructor(private httpClient: HttpClient) { }

  getParkings(): Observable<ParkingInfo[]> {
    return this.httpClient.get<ParkingInfo[]>(environment.apiUrl + '/parkings');
  }


  getParking(id: number): Observable<ParkingInfo> {
    // @ts-ignore
    return this.httpClient.get<ParkingInfo[]>(environment.apiUrl + '/parkings').pipe(
      map(parkings => parkings.find(parking => parking.identifiant === id))
    );
  }

}

