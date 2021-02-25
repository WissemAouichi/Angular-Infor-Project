import {
    Component,
    OnInit,
    ViewChild,
  } from '@angular/core';
  // @ts-ignore
  import { SohoDatePickerComponent } from 'ids-enterprise-ng';
  
  @Component({
    selector: 'date-picker',
    templateUrl: 'datepicker.component.html'
  })
  export class DatePickerComponent implements OnInit {
  
    @ViewChild(SohoDatePickerComponent, { static: true }) datepicker?: SohoDatePickerComponent;
  
    public model = {
      standard: '12/12/2016',
      validrange: '12/12/2016',
      anniversary: '',
      birthday: '',
      year: '',
      datetime: '',
      datetime2: '05.04.2018 16:15',
      range: '12/12/2016 - 12/26/2016',
      range2: '1/12/2017 - 1/16/2017',
      umalqura: ''
    };
    public showModel = false;
    public datepickerDisabled = false;
    public datepickerReadOnly = false;
  
    public disableOptions: SohoDatePickerDisable = {
      dates: '',
      minDate: '12/31/2015',
      maxDate: '1/1/2017',
      dayOfWeek: []
    };
  
    public disableOptions2: SohoDatePickerDisable = {
      dates: '',
      minDate: new Date(2018, 2, 8),
      maxDate: new Date(2018, 3, 10),
      dayOfWeek: []
    };
  
    public rangeOptions: SohoDatePickerRange = {
      start: new Date(2016, 12, 12),
      end: new Date(2016, 12, 16),
      useRange: true
    };
  
    public datePickerOptions: SohoDatePickerOptions = {
      showTime: true,
      timeFormat: 'HH:mm:ss',
      minuteInterval: 10,
      secondInterval: 10,
      roundToInterval: true,
      dateFormat: 'mm/dd/yyyy',
      placeholder: 'placeholder',
      showLegend: true,
      showMonthYearPicker: true,
      legend: [{ name: 'Weekends', color: '#EFA836', dayOfWeek: [0, 6] }],
      calendarName: 'gregorian'
    };
  
    public umalquraOptions: SohoDatePickerOptions = {
      mode: 'standard',
      dateFormat: 'yyyy/MM/dd',
      showMonthYearPicker: true,
      calendarName: 'islamic-umalqura',
      locale: 'ar-SA'
    };
  
    constructor() { }
    ngOnInit() {
      this.registerCustomValidator();
    }
  
    toggleModel() {
      this.showModel = !this.showModel;
    }
  
    clear() {
      this.model.standard = '';
    }
  
    onChange(event: SohoDatePickerEvent) {
      console.log('DatePickerDemoComponent.onChange: type=' + event.type, 'Has originalEvent: ' + (event.originalEvent !== undefined));
    }
  
    setEnable() {
      (this.datepicker as any).disabled = false;
      this.datepickerDisabled = (this.datepicker as any).disabled;
      this.datepickerReadOnly = (this.datepicker as any).readonly;
    }
  
    setDisable() {
      (this.datepicker as any).disabled = true;
      this.datepickerDisabled = (this.datepicker as any).disabled;
    }
  
    setReadonly() {
      (this.datepicker as any).readonly = true;
      this.datepickerReadOnly = (this.datepicker as any).readonly;
    }
  
    registerCustomValidator() {
      const customRule: any = {
        check: (value: any, field: any, grid: any) => {
          console.log(value, field, grid);
          return false;
        },
        id: 'custom',
        type: 'error',
        message: 'Test Error - Anything you enter will be wrong'
      };
  
      // @ts-ignore
      Soho.Validation.rules['customRule'] = customRule;
    }
  }