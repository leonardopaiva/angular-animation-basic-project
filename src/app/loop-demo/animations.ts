import { trigger, style, state, transition, animate, keyframes, query, stagger } from '@angular/animations';

export const statusChange = trigger('statusChange', [
  transition('void => *', [
    style({
      opacity: '0',
      transform: 'translateX(-100%)'
    }),
    animate('300ms', style({
      opacity: '1',
      transform: 'translateX(0)'
    }))
  ]),
  transition('loop-state => start-state', [
  ]),
  transition('* => loop-state', [
    style({
      transform: 'translate3d(0,0,0)'
    }),
    animate('300ms', style({
      transform: 'translate3d(300%, 0, 0)'
    })),
    animate('300ms', style({
      transform: 'translate3d(300%, 100%, 0)'
    })),
    animate('300ms', style({
      transform: 'translate3d(0, 100%, 0)'
    })),
    animate('300ms', style({
      transform: 'translate3d(0, 0, 0)'
    }))
  ]),
  transition('* => end-state', [
    animate('300ms', style({
      transform: 'translate3d(0,0,0)'
    })),
    animate('300ms', style({
      transform: 'translate3d(-100%,0,0)'
    })),
    animate('300ms', style({
      transform: 'translate3d(1000%,0,0)'
    }))
  ]),
]);
