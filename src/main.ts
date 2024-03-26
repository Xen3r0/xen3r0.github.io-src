import {HttpClientModule} from '@angular/common/http';
import {enableProdMode, importProvidersFrom} from '@angular/core';
import {bootstrapApplication, BrowserModule} from '@angular/platform-browser';

import {AppComponent} from '@app/components/app/app.component';

import {environment} from './environments/environment';

if (environment.production) {
    enableProdMode();
}

bootstrapApplication(
    AppComponent,
    {
        providers: [
            importProvidersFrom(BrowserModule),
            importProvidersFrom(HttpClientModule),
        ]
    }
).catch(err => console.error(err));
