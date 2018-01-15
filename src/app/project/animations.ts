import { trigger, style, state, transition, animate, keyframes, query, stagger } from '@angular/animations';

export const statusChange = trigger('statusChange', [
  transition('* => *', [
    style({
      opacity: '{{ startOpacity }}',
      transform: 'translateX(-100%)'
    }),
    animate('300ms', style({
      opacity: '{{ opacity }}',
      transform: 'translateX(0)'
    }))
  ],  { params: { opacity: 1 }})
]);
