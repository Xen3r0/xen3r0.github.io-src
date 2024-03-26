import {AsyncPipe} from '@angular/common';
import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

import {Observable} from 'rxjs';

import {ContactItemModel} from '@app/models/contact-item.model';

import {ContactService} from '@app/services/contact/contact.service';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [AsyncPipe],
    providers: [ContactService]
})
export class ContactComponent implements OnInit {
    items$: Observable<Array<ContactItemModel>>;

    constructor(private contactService: ContactService) {
    }

    ngOnInit(): void {
        this.items$ = this.contactService.fetch();
    }
}
