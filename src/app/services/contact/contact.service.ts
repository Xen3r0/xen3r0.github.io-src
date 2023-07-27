import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

import {Observable} from 'rxjs';

import {ContactItemModel} from '../../models/contact-item.model';

import {DataInterface} from '../data.interface';

@Injectable()
export class ContactService implements DataInterface {
    constructor(private httpClient: HttpClient) {
    }

    getAll(): Observable<Array<ContactItemModel>> {
        return this.httpClient.get<Array<ContactItemModel>>('assets/data/contact.json');
    }
}
