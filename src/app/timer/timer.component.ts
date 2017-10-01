import { Component, OnInit, ViewChild } from '@angular/core';
import { ControlButton } from '../control-buttons/control-buttons.component';
import { SettingsService } from '../settings.service';
import { CountdownComponent } from '../countdown/countdown.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {
  @ViewChild(CountdownComponent) countdown: CountdownComponent;

  seconds: number;
  
  constructor(private router: Router, private settings: SettingsService) { }

  ngOnInit() {
    this.seconds = this.settings.countdown
  }

  onButtonClick(button: ControlButton) {
    switch(button) {
     case ControlButton.Close: this.close(); break;
     case ControlButton.Start: this.countdown.start(); break;
     case ControlButton.Stop: this.countdown.stop(); break;
     case ControlButton.Reset: this.countdown.reset(); break;    }
  }  

  close() {
    this.countdown.stop();
    this.router.navigateByUrl('/clock');
  }  
}
