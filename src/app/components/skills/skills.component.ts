import {Component, OnInit} from '@angular/core';

import {Observable} from 'rxjs';

import {SkillItemModel} from '@app/models/skill-item.model';

import {SkillsService} from '@app/services/skills/skills.service';

@Component({
    selector: 'app-skills',
    templateUrl: './skills.component.html',
    styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
    items$: Observable<Array<SkillItemModel>>;

    constructor(private skillsService: SkillsService) {
    }

    ngOnInit(): void {
        this.items$ = this.skillsService.getAll();
    }
}
