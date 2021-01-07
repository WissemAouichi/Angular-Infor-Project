import { Component } from '@angular/core';
import { OCCUPANCY_DATA } from '../../demodata/sample-data';
import { OccupanyModel } from './models/occupancy.model';

@Component({
  templateUrl:'occupancy.component.html',
})

export class OccupancyComponent {

  occupancyData: OccupanyModel[] = OCCUPANCY_DATA;

}
