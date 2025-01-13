import {AsyncPipe, NgIf} from '@angular/common';
import {Component, OnInit} from '@angular/core';

import {Observable} from 'rxjs';

import {SkillModel} from '@app/models/skill-item.model';

import {SkillsFetcher} from '@app/services/skills/skills-fetcher.service';
import {TranslateModule} from '@ngx-translate/core';

@Component({
    selector: 'app-skills',
    templateUrl: './skills.component.html',
    styleUrls: ['./skills.component.scss'],
    imports: [
        NgIf,
        AsyncPipe,
        TranslateModule,
    ],
    providers: [SkillsFetcher]
})
export class SkillsComponent implements OnInit {
    skills$: Observable<SkillModel>;

    constructor(private skillsService: SkillsFetcher) {
    }

    ngOnInit(): void {
        this.skills$ = this.skillsService.fetch();
    }
}
