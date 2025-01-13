import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TranslateModule} from '@ngx-translate/core';

@Component({
    selector: 'app-hobbies',
    templateUrl: './hobbies.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [
        TranslateModule,
    ]
})
export class HobbiesComponent {
}
