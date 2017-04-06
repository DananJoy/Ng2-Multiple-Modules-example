import { Component } from '@angular/core';

import { PlayersComponent } from './players/players.component';
import { TeamsComponent } from './teams/teams.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular 2 Separated Modules';
}
