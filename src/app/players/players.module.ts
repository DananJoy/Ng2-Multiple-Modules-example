import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Http } from '@angular/http';

import { PlayersRouter } from './players.routes'; 

import { PlayersComponent } from './players.component';

@NgModule({
    declarations: [ PlayersComponent ],
    imports: [
        CommonModule,
        FormsModule,
        PlayersRouter
    ],
    providers: [],
    bootstrap: [ PlayersComponent ]
})

export class PlayersModule {}