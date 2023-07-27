import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';

import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

import {SkillsComponent} from './components/skills/skills.component';

import {SkillsService} from './services/skills/skills.service';

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,

        MatIconModule,
        MatListModule,
        MatProgressBarModule,
        MatProgressSpinnerModule,
    ],
    declarations: [
        SkillsComponent,
    ],
    exports: [
        SkillsComponent,
    ],
    providers: [
        SkillsService,
    ]
})
export class SkillsModule {
}
