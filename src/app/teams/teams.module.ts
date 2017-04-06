import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Http } from '@angular/http';

import { TeamsRouter } from './teams.routes';

import { TeamsComponent } from './teams.component';

@NgModule({
    declarations: [ TeamsComponent ],
    imports: [
        CommonModule,
        FormsModule,
        TeamsRouter
    ],
    providers: [],
    bootstrap: [ TeamsComponent ]
})

export class TeamsModule {}