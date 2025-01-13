import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

import {Observable} from 'rxjs';

import {ContactItemModel} from '@app/models/contact-item.model';

import {FetcherInterface} from '@app/services/fetcher';

@Injectable({providedIn: 'root'})
export class ContactService implements FetcherInterface {
    constructor(private httpClient: HttpClient) {
    }

    fetch(): Observable<Array<ContactItemModel>> {
        return this.httpClient.get<Array<ContactItemModel>>('/data/contact.json');
    }
}
