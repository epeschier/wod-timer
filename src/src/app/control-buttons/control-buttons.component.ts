import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ShowButtons } from '../show-buttons';
import { Router } from '@angular/router';

@Component({
  selector: 'control-buttons',
  templateUrl: './control-buttons.component.html',
  styleUrls: ['./control-buttons.component.css']
})
export class ControlButtonsComponent implements OnInit {
  @Input() settingsUrl: boolean;
  @Output() onButtonClick = new EventEmitter<ControlButton>();

  visibleButtons:ShowButtons;

  constructor() { 
    this.visibleButtons = new ShowButtons();
   }

  ngOnInit() {
    if (this.settingsUrl === null) {
      this.settingsUrl = true;
    }
    this.visibleButtons.Set(this.settingsUrl, true, false, false);
  }

  start() {
    this.visibleButtons.Set(false, false, true, false);
    this.onButtonClick.emit(ControlButton.Start);
  }

  stop() {
    this.visibleButtons.Set(this.settingsUrl, true, false, true);
    this.onButtonClick.emit(ControlButton.Stop);
  }

  reset() {
    this.visibleButtons.Set(this.settingsUrl, true, false, false);
    this.onButtonClick.emit(ControlButton.Reset);
  }

  close() {
    this.onButtonClick.emit(ControlButton.Close);
  }

  settings() {
  }  
}

export enum ControlButton {
    Start = 1,
    Stop,
    Reset,
    Settings,
    Close
};