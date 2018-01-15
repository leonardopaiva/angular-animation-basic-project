import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { statusChange } from './animations';

@Component({
  selector: 'app-loop-demo',
  templateUrl: './loop-demo.component.html',
  styleUrls: ['./loop-demo.component.css'],
  animations: [
    statusChange
  ],
  encapsulation: ViewEncapsulation.None
})
export class LoopDemoComponent implements OnInit {
  statusState = 'start-state';
  isLoop = false;

  constructor() { }

  ngOnInit() {
  }

  // Start and Done Events
  onAnimationStarted(event: AnimationEvent): void {
    // console.log(event);
  }
  onAnimationDone(event: AnimationEvent): void {
    // console.log(event);

    if (event['fromState'] !== 'void' && this.isLoop) {
      setTimeout(() => {
        this.statusState === 'start-state' ? this.statusState = 'loop-state' : this.statusState = 'start-state';
      }, 0);
    }
  }

  // State Swap Events
  onStartState() {
    this.isLoop = false;

    console.log('from: ', this.statusState);
    this.statusState = 'start-state';
    console.log('to: ', this.statusState);
  }
  onLoopState() {
    this.isLoop = true;

    console.log('from: ', this.statusState);
    this.statusState = 'loop-state';
    // this.statusState === 'start-state' ? this.statusState = 'loop-state' : this.statusState = 'start-state';
    console.log('to: ', this.statusState);
  }
  onEndState() {
    this.isLoop = false;

    console.log('from: ', this.statusState);
    this.statusState = 'end-state';
    console.log('to: ', this.statusState);
  }

}
