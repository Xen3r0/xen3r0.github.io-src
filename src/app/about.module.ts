// Angular
import {NgModule} from '@angular/core';
// Components
import {AboutComponent} from './components/about/about.component';

@NgModule({
    declarations: [
        // Components
        AboutComponent,
    ],
    exports: [
        // Components
        AboutComponent,
    ]
})
export class AboutModule {
}
