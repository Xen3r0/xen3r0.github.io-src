// Angular
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
// Dependencies
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
// Components
import {SkillsComponent} from './components/skills/skills.component';
// Services
import {SkillsService} from './services/skills/skills.service';

@NgModule({
    imports: [
        // Angular
        CommonModule,
        HttpClientModule,
        // Dependencies
        MatIconModule,
        MatListModule,
        MatProgressBarModule,
        MatProgressSpinnerModule,
    ],
    declarations: [
        // Components
        SkillsComponent,
    ],
    exports: [
        // Components
        SkillsComponent,
    ],
    providers: [
        SkillsService,
    ]
})
export class SkillsModule {
}
