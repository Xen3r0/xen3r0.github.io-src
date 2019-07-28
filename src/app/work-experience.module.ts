// Angular
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
// Components
import {WorkExperienceComponent} from './components/work-experience/work-experience.component';

@NgModule({
    imports: [
        // Angular
        CommonModule,
    ],
    declarations: [
        // Components
        WorkExperienceComponent,
    ],
    exports: [
        // Components
        WorkExperienceComponent,
    ]
})
export class WorkExperienceModule {
}
