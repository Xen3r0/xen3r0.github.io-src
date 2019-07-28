// Angular
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
// Components
import {AppComponent} from './components/app/app.component';
// Modules
import {AboutModule} from './about.module';
import {ContactModule} from './contact.module';
import {HeaderModule} from './header.module';
import {HobbiesModule} from './hobbies.module';
import {EducationModule} from './education.module';
import {SkillsModule} from './skills.module';
import {WorkExperienceModule} from './work-experience.module';

@NgModule({
    imports: [
        // Angular
        BrowserModule,

        // App
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
