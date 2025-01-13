import {JsonPipe} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject, LOCALE_ID, OnDestroy, OnInit} from '@angular/core';

import {AboutComponent} from '@app/components/about/about.component';
import {EducationComponent} from '@app/components/education/education.component';
import {HobbiesComponent} from '@app/components/hobbies/hobbies.component';
import {SkillsComponent} from '@app/components/skills/skills.component';
import {WorkExperienceComponent} from '@app/components/work-experience/work-experience.component';

import {TranslateModule, TranslateService} from '@ngx-translate/core';
import {ScrollSpy} from 'bootstrap';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        AboutComponent,
        EducationComponent,
        HobbiesComponent,
        SkillsComponent,
        WorkExperienceComponent,
        TranslateModule,
    ]
})
export class AppComponent implements OnInit, OnDestroy {

    scrollSpy: ScrollSpy;

    navbarToggler: HTMLButtonElement;

    responsiveNavItems: Array<HTMLLinkElement>;

    private translate = inject(TranslateService);

    constructor() {
        this.translate.addLangs(['fr', 'en']);
        this.translate.setDefaultLang('fr');
        this.translate.use(this.translate.getBrowserLang() || 'fr');
    }


    ngOnInit(): void {
        const sideNav = document.body.querySelector('#sideNav');
        if (sideNav) {
            this.scrollSpy = new ScrollSpy(document.body, {
                target: '#sideNav',
                rootMargin: '0px 0px -40%',
            });
        }

        this.navbarToggler = document.body.querySelector('.navbar-toggler') as HTMLButtonElement;
        this.responsiveNavItems = [].slice.call(document.querySelectorAll('#navbarResponsive .nav-link')) as Array<HTMLLinkElement>;
        this.responsiveNavItems.map((responsiveNavItem) => {
            responsiveNavItem.addEventListener('click', this.onNavLinkClick);
        });
    }

    ngOnDestroy(): void {
        if (this.scrollSpy instanceof ScrollSpy) {
            this.scrollSpy.dispose();
        }

        this.responsiveNavItems.map(responsiveNavItem => {
            responsiveNavItem.removeEventListener('click', this.onNavLinkClick);
        });
    }

    protected changeLocale(locale: string) {
        this.translate.use(locale);
    }

    private onNavLinkClick(): void {
        if (!this.navbarToggler) {
            return;
        }

        if (window.getComputedStyle(this.navbarToggler).display !== 'none') {
            this.navbarToggler.click();
        }
    }
}
