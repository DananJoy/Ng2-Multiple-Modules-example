import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { TeamsComponent } from './teams.component';

const teamsRoutes: Routes = [
    { path:'teams', component: TeamsComponent }
]

export const TeamsRouter: ModuleWithProviders = RouterModule.forChild(teamsRoutes);

export class TeamsRoutes {}
