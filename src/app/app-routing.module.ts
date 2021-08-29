import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {ParkingsComponent} from "./parkings/parkings.component";
import {ParkingDetailComponent} from "./parking-detail/parking-detail.component";

const routes: Routes = [
  { path: 'parkings', component: ParkingsComponent },
  { path: 'parking/:id', component:ParkingDetailComponent },
  { path: '', redirectTo: 'parkings', pathMatch: 'full' },
  { path : '**', redirectTo: 'parkings' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
