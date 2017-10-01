import { Injectable } from '@angular/core';

@Injectable()
export class BeeperService {
  beep1 = new Audio("../assets/audio/beep-07.wav");
  beep2 = new Audio("../assets/audio/beep-09.wav");

  constructor() { 
    this.beep1.load();
    this.beep2.load();
    
  }

  beep(seconds) {
    if (seconds === 0) {
        this.beep2.play();
    }
    else if (seconds <= 3) {
      this.beep1.play();
    }
  }  
}
