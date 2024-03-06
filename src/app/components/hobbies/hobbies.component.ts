import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

import {Observable} from 'rxjs';

import {HobbyItemModel} from '@app/models/hobby-item.model';

import {HobbiesService} from '@app/services/hobbies/hobbies.service';

@Component({
    selector: 'app-hobbies',
    templateUrl: './hobbies.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HobbiesComponent implements OnInit {
    items$: Observable<Array<HobbyItemModel>>;

    constructor(private hobbiesService: HobbiesService) {
    }

    ngOnInit(): void {
        this.items$ = this.hobbiesService.getAll();
    }
}
