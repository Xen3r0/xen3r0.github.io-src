import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';

import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';

import {HobbiesComponent} from '@app/components/hobbies/hobbies.component';

import {HobbiesService} from '@app/services/hobbies/hobbies.service';

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,

        MatChipsModule,
        MatIconModule,
    ],
    declarations: [
        HobbiesComponent,
    ],
    exports: [
        HobbiesComponent,
    ],
    providers: [
        HobbiesService,
    ]
})
export class HobbiesModule {
}
