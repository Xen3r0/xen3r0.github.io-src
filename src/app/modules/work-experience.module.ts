import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';

import {WorkExperienceComponent} from '@app/components/work-experience/work-experience.component';

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [
        WorkExperienceComponent,
    ],
    exports: [
        WorkExperienceComponent,
    ]
})
export class WorkExperienceModule {
}
