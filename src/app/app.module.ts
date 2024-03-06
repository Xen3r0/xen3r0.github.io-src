import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from '@app/components/app/app.component';

import {AboutModule} from '@app/modules/about.module';
import {ContactModule} from '@app/modules/contact.module';
import {EducationModule} from '@app/modules/education.module';
import {HeaderModule} from '@app/modules/header.module';
import {HobbiesModule} from '@app/modules/hobbies.module';
import {SkillsModule} from '@app/modules/skills.module';
import {WorkExperienceModule} from '@app/modules/work-experience.module';

@NgModule({
    imports: [
        BrowserModule,

        AboutModule,
        ContactModule,
        HeaderModule,
        HobbiesModule,
        EducationModule,
        SkillsModule,
        WorkExperienceModule,
    ],
    declarations: [
        AppComponent,
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
