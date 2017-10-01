import { Injectable } from '@angular/core';
import { IntervalSettings } from './interval-settings';

@Injectable()
export class SettingsService {

  public interval:IntervalSettings;
  public countdown: number;

  constructor() { 
    this.countdown = 15 * 60;
    this.interval = new IntervalSettings(20, 10, 8);    // Standard tabata.
  }

}
