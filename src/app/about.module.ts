import {NgModule} from '@angular/core';

import {AboutComponent} from './components/about/about.component';

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
