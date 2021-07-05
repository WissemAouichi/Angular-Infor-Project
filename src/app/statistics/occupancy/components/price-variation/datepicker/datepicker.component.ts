import { Component, HostListener, OnInit, ViewChild } from "@angular/core";
import { SohoDatePickerComponent } from "ids-enterprise-ng";

@Component({
  selector: "date-picker",
  templateUrl: "datepicker.component.html",
})
export class DatePickerComponent {
  public innerWidth: any;
  public displayDatepicker: boolean;
  public dateRange;

  @ViewChild(SohoDatePickerComponent, { static: true })
  datepicker?: SohoDatePickerComponent;
  dateFormat = Soho.Locale.currentLocale.data.calendars[0].dateFormat.short;

  public model = {
    standard: "2020/01/01",
    validrange: "2020/01/01",
    range: "01/01/2020 - 31/01/2020",
    range2: "1/12/2017 - 1/16/2017",
  };
  public showModel = false;
  public datepickerDisabled = false;
  public datepickerReadOnly = false;

  public disableOptions: SohoDatePickerDisable = {
    minDate: "2020/01/01",
    maxDate: "2020/01/31",
    dayOfWeek:[0,1]
  };

  public datePickerOptions: SohoDatePickerOptions = {
    showTime: true,
    timeFormat: "HH:mm:ss",
    minuteInterval: 10,
    secondInterval: 10,
    roundToInterval: true,
    dateFormat: "yyyy/dd/mm",
    placeholder: "placeholder",
    showLegend: true,
    showMonthYearPicker: true,
    legend: [{ name: "Weekends", color: "#EFA836", dayOfWeek: [0, 6] }],
    calendarName: "gregorian",
  };

  constructor() {}

  onChange(event: SohoDatePickerEvent) {
    console.log(
      "DatePickerDemoComponent.onChange: type=" + event.data,
      "Has originalEvent: " + (event.originalEvent !== undefined)
    );
    console.log(this.model.validrange);
  }

  /* 

      toggleModel() {
     this.showModel = !this.showModel;
   }
      clear() {
     this.model.standard = '';
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
 */
}
