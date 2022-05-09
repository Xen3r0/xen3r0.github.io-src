// Angular
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
// Dependencies
import {MatIconModule} from '@angular/material/icon';
// Components
import {EducationComponent} from './components/education/education.component';
// Services
import {EducationService} from './services/education/education.service';

@NgModule({
    imports: [
        // Angular
        CommonModule,
        HttpClientModule,
        // Dependencies
        MatIconModule,
    ],
    declarations: [
        // Components
        EducationComponent,
    ],
    exports: [
        // Components
        EducationComponent,
    ],
    providers: [
        EducationService,
    ]
})
export class EducationModule {
}
