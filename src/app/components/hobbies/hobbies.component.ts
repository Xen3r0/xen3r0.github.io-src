// Angular
import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
// Dependencies
import {Observable} from 'rxjs';
// Models
import {HobbyItemModel} from '../../models/hobby-item.model';
// Services
import {HobbiesService} from '../../services/hobbies/hobbies.service';

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
