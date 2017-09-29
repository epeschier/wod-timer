import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes }   from '@angular/router';
import { DatePipe } from '@angular/common';

import { AppComponent } from './app.component';
import { ClockComponent } from './clock/clock.component';
import { TimerButtonsComponent } from './timer-buttons/timer-buttons.component';
import { StopwatchComponent } from './stopwatch/stopwatch.component';
import { ControlButtonsComponent } from './control-buttons/control-buttons.component';
import { CountdownComponent } from './countdown/countdown.component';
import { SettingsService } from './settings.service';
import { BeeperService } from './beeper.service';
import { CountinComponent } from './countin/countin.component';
import { SettingsComponent } from './settings/settings.component';
import { SelecttimeComponent } from './selecttime/selecttime.component';
import { FormsModule }   from '@angular/forms';
import { IntervalComponent } from './interval/interval.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { TimerComponent } from './timer/timer.component';
import { IntervalSettingsComponent } from './interval-settings/interval-settings.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'clock',
    pathMatch: 'full'
  },
  { path: 'clock', component: ClockComponent },
  { path: 'stopwatch', component: StopwatchComponent },
  { path: 'timer', component: TimerComponent },
  { path: 'interval', component: IntervalComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'interval-settings', component: IntervalSettingsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ClockComponent,
    TimerButtonsComponent,
    StopwatchComponent,
    ControlButtonsComponent,
    CountdownComponent,
    CountinComponent,
    SettingsComponent,
    SelecttimeComponent,
    IntervalComponent,
    ProgressBarComponent,
    TimerComponent,
    IntervalSettingsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes, 
      { enableTracing: false }
    )
  ],
  providers: [SettingsService, BeeperService, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
