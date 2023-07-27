import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AboutModule} from './about.module';

import {AppComponent} from './components/app/app.component';
import {ContactModule} from './contact.module';
import {EducationModule} from './education.module';
import {HeaderModule} from './header.module';
import {HobbiesModule} from './hobbies.module';
import {SkillsModule} from './skills.module';
import {WorkExperienceModule} from './work-experience.module';

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
