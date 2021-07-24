import { Component, Input } from '@angular/core';
import { OccupanyModel } from '../../models/occupancy.model';

@Component({
  selector:'data-grid-occupancy',
  templateUrl:'data-grid-occupancy.component.html',
  styleUrls:['data-grid-occupancy.component.scss']
})

export class DataGridOccupancyComponent {

  data: OccupanyModel[];
  gridOptions: SohoDataGridOptions;

  dataGridColumns: SohoDataGridColumn[] = [
    {
      id: 'date',
      name: 'Date',
      field: 'date',
      sortable: true,
      formatter: Soho.Formatters.Readonly
    },
    {
      id: 'capacity',
      name: 'Capacity',
      field: 'capacity',
      sortable: true,
      formatter: Soho.Formatters.Readonly
    },
    {
      id: 'occupancy',
      name: 'Occupancy',
      field: 'occupancy',
      sortable: true,
      formatter: Soho.Formatters.Readonly
    },
  ];

  @Input() 
  set occupancyData(occupancyData: OccupanyModel[]) {
    this.data = occupancyData;
    if (this.data) {
      this.initGridData();
    }
  };

  private initGridData(): void {
    this.gridOptions = {
      columns: this.dataGridColumns,
      dataset: this.data,
      selectable: 'single',
      isList: true,
    };
  }
}
