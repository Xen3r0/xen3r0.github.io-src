import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
    selector: 'app-hobbies',
    templateUrl: './hobbies.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true
})
export class HobbiesComponent {
}
