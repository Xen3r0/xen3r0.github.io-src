import {NgModule} from '@angular/core';

import {AboutComponent} from '@app/components/about/about.component';

@NgModule({
    declarations: [
        AboutComponent,
    ],
    exports: [
        AboutComponent,
    ]
})
export class AboutModule {
}
