import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { PlayersComponent } from './players.component';

const playerRoutes: Routes = [
    { path:'players', component: PlayersComponent }
]

export const PlayersRouter: ModuleWithProviders = RouterModule.forChild(playerRoutes);

export class PlayersRoutes {}
