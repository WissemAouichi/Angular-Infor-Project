import {
    Component,
    ChangeDetectionStrategy
  } from '@angular/core';
import { OCCUPANCY_DATA } from 'src/app/demodata/sample-data';
  
  @Component({
    selector: 'export-data-grid',
    templateUrl: 'export-data-grid.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
  })

  export class ExportDataGridComponent {
  
    private dataset = OCCUPANCY_DATA;
  
    exportToCsv() {
      Soho.excel.exportToCsv('MyExport', this.dataset);
    }
    exportToExcel() {
      Soho.excel.exportToExcel('MyExport', 'Worksheet1', this.dataset);
    }
  }