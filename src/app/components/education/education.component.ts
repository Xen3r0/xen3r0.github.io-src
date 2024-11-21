import {AsyncPipe} from '@angular/common';
import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

import {Observable} from 'rxjs';

import {EducationItemModel} from '@app/models/education-item.model';

import {EducationService} from '@app/services/education/education.service';

@Component({
    selector: 'app-education',
    templateUrl: './education.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [AsyncPipe],
    providers: [EducationService]
})
export class EducationComponent implements OnInit {
    items$: Observable<Array<EducationItemModel>>;

    constructor(private educationService: EducationService) {
    }

    ngOnInit(): void {
        this.items$ = this.educationService.fetch();
    }
}
