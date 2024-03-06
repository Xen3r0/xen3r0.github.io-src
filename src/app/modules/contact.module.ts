import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';

import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';

import {ContactComponent} from '@app/components/contact/contact.component';

import {ContactService} from '@app/services/contact/contact.service';

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,

        MatIconModule,
        MatListModule,
    ],
    declarations: [
        ContactComponent,
    ],
    exports: [
        ContactComponent,
    ],
    providers: [
        ContactService,
    ]
})
export class ContactModule {
}
