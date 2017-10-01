import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DatePipe } from '@angular/common';
import { SettingsService } from '../settings.service';

@Component({
  selector: 'selecttime',
  templateUrl: './selecttime.component.html',
  styleUrls: ['./selecttime.component.css']
})
export class SelecttimeComponent implements OnInit {
  @Input() value:number;
  @Input() showTicks:boolean;
  @Output() valueChange = new EventEmitter<number>();

  timerInc = [60,10];
  selected = -1;   // Nothing selected.
  hh = '0';
  mm = '0';
  ss = '0';

  constructor(private datePipe: DatePipe) { }

  ngOnInit() {
    if (this.showTicks) {
      this.timerInc[1] = 1;
      this.selected = 1;
    }
    this.formatTime(this.value);
  }

  clickElement(value) {
    this.selected = value;
  }

  addValue() {
    if (this.selected !== -1) {
      this.value += this.timerInc[this.selected];
      this.valueChange.emit(this.value);
      this.formatTime(this.value);
    }
  }

 subValue() {
    if (this.selected !== -1) {
        if (this.value - this.timerInc[this.selected] > 0) {
          this.value -= this.timerInc[this.selected];
          this.valueChange.emit(this.value);
        }
        this.formatTime(this.value);
    }
  }

  formatTime(seconds) {
    var date = new Date(seconds * 1000);
    var strDate = this.datePipe.transform(date, 'HH:mm:ss');
    var dateParts = strDate.toString().split(':');
    this.hh = dateParts[0];
    this.mm = dateParts[1];
    this.ss = dateParts[2];
  }
}
