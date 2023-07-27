import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
// Dependencies
import {MatIconRegistry} from '@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser';
import {Observable} from 'rxjs';
// Models
import {ContactItemModel} from '../../models/contact-item.model';
// Services
import {ContactService} from '../../services/contact/contact.service';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactComponent implements OnInit {
    items$: Observable<Array<ContactItemModel>>;

    constructor(private contactService: ContactService,
                private iconRegistry: MatIconRegistry,
                private sanitizer: DomSanitizer) {
        ['github', 'twitter', 'linkedin'].forEach((value: string) => {
            this.iconRegistry.addSvgIcon(value, this.sanitizer.bypassSecurityTrustResourceUrl('assets/icons/' + value + '.svg'));
        });
    }

    ngOnInit(): void {
        this.items$ = this.contactService.getAll();
    }
}
