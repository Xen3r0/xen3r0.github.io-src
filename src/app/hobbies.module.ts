// Angular
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
// Dependencies
import {MatLegacyChipsModule as MatChipsModule} from '@angular/material/legacy-chips';
import {MatIconModule} from '@angular/material/icon';
// Components
import {HobbiesComponent} from './components/hobbies/hobbies.component';
// Services
import {HobbiesService} from './services/hobbies/hobbies.service';

@NgModule({
    imports: [
        // Angular
        CommonModule,
        HttpClientModule,

        // Dependencies
        MatChipsModule,
        MatIconModule,
    ],
    declarations: [
        // Components
        HobbiesComponent,
    ],
    exports: [
        // Components
        HobbiesComponent,
    ],
    providers: [
        HobbiesService,
    ]
})
export class HobbiesModule {
}
