// Angular
import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
// Dependencies
import {Observable} from 'rxjs';
// Models
import {SchoolItemModel} from '../../models/school-item.model';
import {SchoolService} from '../../services/school/school.service';

@Component({
    selector: 'app-school',
    templateUrl: './school.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SchoolComponent implements OnInit {
    items$: Observable<Array<SchoolItemModel>>;

    constructor(private schoolService: SchoolService) {
    }

    ngOnInit(): void {
        this.items$ = this.schoolService.getAll();
    }
}
