// Angular
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
// Dependencies
import {MatIconModule} from '@angular/material';
// Components
import {SchoolComponent} from './components/school/school.component';
// Services
import {SchoolService} from './services/school/school.service';

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
        SchoolComponent,
    ],
    exports: [
        // Components
        SchoolComponent,
    ],
    providers: [
        SchoolService,
    ]
})
export class SchoolModule {
}
