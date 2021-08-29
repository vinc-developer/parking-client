import { Component, OnInit } from '@angular/core';
import {ParkingInfo} from "../parkingInfo";
import {ActivatedRoute} from "@angular/router";
import {ParkingService} from "../parking.service";

@Component({
  selector: 'app-parking-detail',
  templateUrl: './parking-detail.component.html',
  styleUrls: ['./parking-detail.component.scss']
})
export class ParkingDetailComponent implements OnInit {

  parking!: ParkingInfo;
  isLoaded: boolean = true;

  constructor(private route: ActivatedRoute, private parkingService: ParkingService) { }

  ngOnInit(): void {
    const parkingId = parseInt(<string>this.route.snapshot.paramMap.get('id'));
    this.parkingService.getParking(parkingId).subscribe(
      reponse => {
        this.parking = reponse;
        this.isLoaded = false;
      }
    );
  }

  calculStyleStatut(parking: ParkingInfo){
    if(parking.statut === "OUVERT"){
      return {color: 'green'}
    } else if(parking.statut === "ABONNES"){
      return {color: 'yellow'}
    } else if(parking.statut === "FERME"){
      return {color: 'red'}
    } else {
      return { 'font-style': 'italic'}
    }
  }

}
