import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit {
  @Input() currentRound: number;
  @Input() totalRounds: number;
  
  constructor() { }

  ngOnInit() {
  }

}
