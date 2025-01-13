import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TranslateModule} from '@ngx-translate/core';

@Component({
    selector: 'app-work-experience',
    templateUrl: './work-experience.component.html',
    styleUrls: ['./work-experience.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [
        TranslateModule,
    ]
})
export class WorkExperienceComponent {
}
