import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../settings.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-interval-settings',
  templateUrl: './interval-settings.component.html',
  styleUrls: ['./interval-settings.component.css']
})
export class IntervalSettingsComponent implements OnInit {

  constructor(private router: Router, public settings: SettingsService) { }

  ngOnInit() {
  }

  close() {
   this.router.navigateByUrl('/interval');
  }
}
