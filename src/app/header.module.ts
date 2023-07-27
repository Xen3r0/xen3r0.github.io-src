import {NgModule} from '@angular/core';

import {HeaderComponent} from './components/header/header.component';

import {AgePipe} from './pipes/age/age.pipe';

@NgModule({
    declarations: [
        HeaderComponent,

        AgePipe,
    ],
    exports: [
        HeaderComponent,

        AgePipe,
    ]
})
export class HeaderModule {
}
