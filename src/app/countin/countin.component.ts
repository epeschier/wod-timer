import { Component, OnInit,  EventEmitter, Output } from '@angular/core';
import { ControlButton } from '../control-buttons/control-buttons.component';
import { BeeperService } from '../beeper.service';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'countin',
  templateUrl: './countin.component.html',
  styleUrls: ['./countin.component.css']
})
export class CountinComponent implements OnInit {
  @Output() onReady = new EventEmitter<void>();

  timer;
  subscription;
  tick: number;

  constructor(public beeper: BeeperService) { 
  }

  ngOnInit() {
    this.reset();
    this.start();
  }

  handleTick(t) {
    if (this.tick === 1) {
      this.stop();
      this.onReady.emit();
    }
    this.tick--;
    this.beeper.beep(this.tick);
  }

  start() {
    this.beeper.beep(this.tick);
    this.timer = Observable.timer(1000, 1000);
    this.subscription = this.timer.subscribe(t => { this.handleTick(t); });
  }

  stop() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  reset() {
    this.tick = 3;    
  }

  ngOnDestroy() {
    stop();
  }

}

export enum TimerState {
  Stopped = 1,
  CountIn,
  Started,
  CountDown
};