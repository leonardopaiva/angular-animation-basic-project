import { transition, trigger, group, query, style, animate, animateChild } from '@angular/animations';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('routeState', [
      // transition('rootPage => usersPage', [
      transition('rootPage => usersPage', [
        group([
          query(':enter', [
            // animateChild(), /* vai executar a animacao padrao da rota, setada no users.component.ts depois vai continuar a animacao */
            style({
              transform: 'translateX(-400px)',
              opacity: 0
            }),
            animate('300ms ease-out')
          ], {optional: true}),
          query(':leave', [
            animate('300ms ease-out', style({
              transform: 'translateX(-600px)',
              opacity: 0
            }))
          ], {optional: true})
        ])
      ]),
      transition('usersPage => rootPage', [
        group([
          query(':enter', [
            // animateChild(), /* vai executar a animacao padrao da rota, setada no users.component.ts depois vai continuar a animacao */
            style({
              transform: 'translateY(-400px)',
              opacity: 0
            }),
            animate('300ms ease-out')
          ], {optional: true}),
          query(':leave', [
            animate('300ms ease-out', style({
              transform: 'translateY(-600px)',
              opacity: 0
            }))
          ], {optional: true})
        ])
      ])
    ])
  ]
})
export class AppComponent {

  getAnimationData(outlet: RouterOutlet) {
    const routeData = outlet.activatedRouteData['animation'];
    if (!routeData) {
      return 'rootPage';
    }
    return routeData['page'];
  }
}
