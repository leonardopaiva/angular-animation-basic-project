import { trigger, style, state, transition, animate, keyframes, group, animation, useAnimation } from '@angular/animations';

const fadeAnimation = animation([
  style({
      opacity: '{{ startOpacity }}'
    }),
    animate('{{ duration }}')
], {params: {startOpacity: 0, duration: '100ms'}}); /*duration precisa ser '100ms' nao pode ser apenas 100 */

export const routeFadeStateTrigger =  (params) => trigger('routeFadeState', [
  transition(':enter', [
    useAnimation(fadeAnimation, {params: params})
  ]),
  transition(':leave', animate(300, style({
    opacity: 0
  }))),
]);

export const routeSlideStateTrigger = trigger('routeSlideState', [
  transition(':enter', [
    style({
      transform: 'translateY(-100%)',
      opacity: 0
    }),
    animate(300)
  ]),
  transition(':leave', style({
    opacity: 0
  })),
]);
