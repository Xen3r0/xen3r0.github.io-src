import {NgModule} from '@angular/core';

import {HeaderComponent} from '@app/components/header/header.component';

import {AgePipe} from '@app/pipes/age/age.pipe';

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
