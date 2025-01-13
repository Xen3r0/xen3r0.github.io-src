import {HttpClient, provideHttpClient, withInterceptorsFromDi} from '@angular/common/http';
import {enableProdMode, importProvidersFrom} from '@angular/core';
import {bootstrapApplication, BrowserModule} from '@angular/platform-browser';

import {AppComponent} from '@app/components/app/app.component';

import {environment} from './environments/environment';

import {provideTranslateService, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

if (environment.production) {
    enableProdMode();
}

const httpLoaderFactory: (http: HttpClient) => TranslateHttpLoader = (http: HttpClient) =>
    new TranslateHttpLoader(http, '/i18n/', '.json');

bootstrapApplication(
    AppComponent,
    {
        providers: [
            importProvidersFrom(BrowserModule),
            provideHttpClient(withInterceptorsFromDi()),
            provideTranslateService({
                defaultLanguage: 'fr',
                loader: {
                    provide: TranslateLoader,
                    useFactory: httpLoaderFactory,
                    deps: [HttpClient],
                },
            }),
        ]
    }
).catch(err => console.error(err));
