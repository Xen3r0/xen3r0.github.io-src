import {ChangeDetectionStrategy, Component} from '@angular/core';

import {ContactComponent} from '@app/components/contact/contact.component';

import {AgePipe} from '@app/pipes/age/age.pipe';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [ContactComponent, AgePipe]
})
export class AboutComponent {
    protected birthday: Date = new Date('1988-11-01');
}
