import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { TimerState } from '../countin/countin.component';
import { ControlButton } from '../control-buttons/control-buttons.component';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.css']
})
export class CountdownComponent implements OnInit {
  @Input() seconds: number;
  @Input() startOnInit: boolean;
  @Output() onTimerDone = new EventEmitter<void>();

  TimerState=TimerState;
  timer;
  subscription;
  time: Date;
  tick: number;
  timezoneOffset:number;
  state:TimerState;

  constructor() { 
    this.time = new Date(0);
    this.timezoneOffset = new Date(0).getTimezoneOffset()*60*1000;
    this.state = TimerState.Stopped;
  }

  ngOnInit() {
    this.reset();
    if (this.startOnInit) {
      this.start();
    }
  }

  onCountInReady() {
    this.state = TimerState.Started;
    this.start();
  }

  handleTick(t) {
    this.tick--;
    this.showTime();
    if (this.tick <= 0) {
      this.stop();
      this.onTimerDone.emit();
    }
    // on 3 start countin again.
  }

  showTime() {
    this.time = new Date(this.tick * 1000 + this.timezoneOffset);    
  }

  start() {
    if (this.state == TimerState.Stopped && !this.startOnInit) {
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
    this.tick = this.seconds;   
    this.showTime();
  }

  ngOnDestroy() {
    stop();
  }

}
