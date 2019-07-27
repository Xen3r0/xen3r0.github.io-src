// Angular
import {NgModule} from '@angular/core';
// Components
import {HeaderComponent} from './components/header/header.component';
// Pipes
import {AgePipe} from './pipes/age/age.pipe';

@NgModule({
    declarations: [
        // Components
        HeaderComponent,

        // Pipes
        AgePipe,
    ],
    exports: [
        // Components
        HeaderComponent,

        // Pipes
        AgePipe,
    ]
})
export class HeaderModule {
}
