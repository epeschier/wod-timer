import { Component, OnInit, ViewChild } from '@angular/core';
import { SettingsService } from '../settings.service';
import { ControlButton } from '../control-buttons/control-buttons.component';
import { CountdownComponent } from '../countdown/countdown.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.css']
})
export class IntervalComponent implements OnInit {
  @ViewChild('timer1') countdown1: CountdownComponent;
  @ViewChild('timer2') countdown2: CountdownComponent;
  
  selectedTimer:number;
  currentRound:number;
  totalRounds:number;
  started:boolean;

  constructor(private router: Router, private settings: SettingsService) { 
    this.totalRounds = settings.interval.rounds;
    this.reset();
    this.started = false;
  }

  ngOnInit() {
  }

  onButtonClick(button: ControlButton) {
    switch(button) {
     case ControlButton.Close: this.close(); break;
     case ControlButton.Start: this.getTimer().start(); break;
     case ControlButton.Stop: this.getTimer().stop(); break;
     case ControlButton.Reset: 
      this.reset();
      this.getTimer().reset(); 
      break;    
    }
  }    

  onTimerDone() {
    this.started = true;
    if (this.selectedTimer === 1) {
      if (this.currentRound === this.totalRounds)
      {
        // Stop.
        this.started = false;
      } 
      else {       
        this.currentRound++;
      }
    }

    if (this.started) {
      this.selectedTimer ^= 1;
    }
  }

  reset() {
    this.selectedTimer = 0;
    this.currentRound = 1;
  }

  close() {
    this.getTimer().stop();
    this.router.navigateByUrl('/clock');
  }    

  private getTimer() {
    return (this.selectedTimer === 0) ? this.countdown1 : this.countdown2;
  }
}
