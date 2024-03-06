import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

import {MatIconRegistry} from '@angular/material/icon';
import {Observable} from 'rxjs';

import {ContactItemModel} from '@app/models/contact-item.model';

import {ContactService} from '@app/services/contact/contact.service';

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
