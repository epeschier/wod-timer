import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit {

  time:Date;
  timer;
  subscription;

  constructor() { }

  ngOnInit() {
    this.timer = Observable.timer(0, 1000);
    this.subscription = this.timer.subscribe(t => { this.handleTick(t); });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  handleTick(t) {
    this.time = new Date();
  }

}
