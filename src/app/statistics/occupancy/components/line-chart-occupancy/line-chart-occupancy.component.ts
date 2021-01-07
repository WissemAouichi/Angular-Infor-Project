import { Component, Input } from '@angular/core';
import { OccupanyModel } from '../../models/occupancy.model';

interface LineChartData {
  name: string;
  value: number;
}

@Component({
  selector:'line-chart-occupancy',
  templateUrl:'line-chart-occupancy.component.html',
})
export class LineChartOccupancyComponent {

  data: OccupanyModel[];
  X_AXIS: string[];
  Y_AXIS: number[] = [0, 20, 40, 60, 80, 100, 120];

  dataset: any[] = [];

  @Input() set occupancyData(occupancyData: OccupanyModel[]) {
    this.data = occupancyData;
    if (this.data) {
      this.initLineChartData();
    }
  };

  private initLineChartData(): void {
    this.X_AXIS = this.data.map(item => item.date);
    const capacityData = this.mapToCapacityLineChartData();
    const occupancyData = this.mapToOccupancyLineChartData();
    this.dataset.push(
      {data: capacityData, name:'capacity', id: '1'},
      {data: occupancyData, name:'occupancy', id: '2'},
    );
  }

  private mapToCapacityLineChartData(): LineChartData[] {
    return this.data.map(item => {
      return {
        name: item.date,
        value: item.capacity
      }
    });
  }

  private mapToOccupancyLineChartData(): LineChartData[] {
    return this.data.map(item => {
      return {
        name: item.date,
        value: item.occupancy
      }
    });
  }
}
