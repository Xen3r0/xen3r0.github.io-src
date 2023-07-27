import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
// Dependencies
import {Observable} from 'rxjs';
// Models
import {EducationItemModel} from '../../models/education-item.model';
// Services
import {EducationService} from '../../services/education/education.service';

@Component({
    selector: 'app-education',
    templateUrl: './education.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class EducationComponent implements OnInit {
    items$: Observable<Array<EducationItemModel>>;

    constructor(private educationService: EducationService) {
    }

    ngOnInit(): void {
        this.items$ = this.educationService.getAll();
    }
}
