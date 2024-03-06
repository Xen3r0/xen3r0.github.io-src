import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';

import {MatIconModule} from '@angular/material/icon';

import {EducationComponent} from '@app/components/education/education.component';

import {EducationService} from '@app/services/education/education.service';

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,

        MatIconModule,
    ],
    declarations: [
        EducationComponent,
    ],
    exports: [
        EducationComponent,
    ],
    providers: [
        EducationService,
    ]
})
export class EducationModule {
}
