import { Component, OnInit } from '@angular/core';
import { ControlButton } from '../control-buttons/control-buttons.component';
import {Observable} from 'rxjs/Rx';
import {Router} from '@angular/router';
import { TimerState } from '../countin/countin.component';

@Component({
  selector: 'app-stopwatch',
  templateUrl: './stopwatch.component.html',
  styleUrls: ['./stopwatch.component.css']
})

export class StopwatchComponent implements OnInit {
  TimerState=TimerState;
  timer;
  subscription;
  time: Date;
  tick: number;
  timezoneOffset:number;
  state:TimerState;
  
  constructor(private router: Router) { 
    this.time = new Date(0);
    this.tick = 0;    
    this.state = TimerState.Stopped;
    
    this.timezoneOffset = new Date(0).getTimezoneOffset()*60*1000;
  }

  ngOnInit() {
    this.showTime();
  }

  onButtonClick(button: ControlButton) {
    switch(button) {
      case ControlButton.Start: this.start(); break;
      case ControlButton.Stop: this.stop(); break;
      case ControlButton.Reset: this.reset(); break;
      case ControlButton.Close: this.close(); break;
    }
  }

  onCountInReady() {
    this.state = TimerState.Started;
    this.start();
  }

  handleTick(t) {
    this.tick++;
    this.showTime();
  }

  showTime() {
    this.time = new Date(this.tick * 1000 + this.timezoneOffset);    
  }

  start() {
    if (this.state == TimerState.Stopped) {
      // Start count in.
      this.state = TimerState.CountIn;
    }
    else {
      this.timer = Observable.timer(1000, 1000);
      this.subscription = this.timer.subscribe(t => { this.handleTick(t); });
    }
  }

  stop() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    this.state = TimerState.Stopped;
  }

  reset() {
    this.tick = 0;
    this.showTime();
  }

  close() {
    stop();
    this.router.navigateByUrl('/clock');
  }

  ngOnDestroy() {
    stop();
  }
}
