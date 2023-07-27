import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
    birthday: Date = new Date('1988-01-01');
}
