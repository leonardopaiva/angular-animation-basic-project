import { Component, OnInit, HostBinding } from '@angular/core';
import { routeFadeStateTrigger, routeSlideStateTrigger } from './../shared/route-animations';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  animations: [
    routeFadeStateTrigger({startOpacity: 0, duration: '2500ms'}),
    routeSlideStateTrigger
  ]
})
export class UsersComponent implements OnInit {
 // @HostBinding('@routeSlideState') routeAnimation = true;
@HostBinding('@routeFadeState') routeAnimation = true;

  constructor() { }

  ngOnInit() {
  }

}
