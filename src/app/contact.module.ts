// Angular
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
// Dependencies
import {MatIconModule} from '@angular/material/icon';
import {MatLegacyListModule as MatListModule} from '@angular/material/legacy-list';
// Components
import {ContactComponent} from './components/contact/contact.component';
// Services
import {ContactService} from './services/contact/contact.service';

@NgModule({
    imports: [
        // Angular
        CommonModule,
        HttpClientModule,
        // Dependencies
        MatIconModule,
        MatListModule,
    ],
    declarations: [
        // Components
        ContactComponent,
    ],
    exports: [
        // Components
        ContactComponent,
    ],
    providers: [
        ContactService,
    ]
})
export class ContactModule {
}
