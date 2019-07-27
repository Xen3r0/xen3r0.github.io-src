// Angular
import {Component, OnInit} from '@angular/core';
// Dependencies
import {Observable} from 'rxjs';
// Models
import {SkillItemModel} from '../../models/skill-item.model';
// Services
import {SkillsService} from '../../services/skills/skills.service';

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
