// Angular
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
// Dependencies
import {Observable} from 'rxjs';
// Models
import {ContactItemModel} from '../../models/contact-item.model';
// Services
import {DataInterface} from '../data.interface';

@Injectable()
export class ContactService implements DataInterface {
    constructor(private httpClient: HttpClient) {
    }

    /**
     * Get all contact items
     */
    getAll(): Observable<Array<ContactItemModel>> {
        return this.httpClient.get<Array<ContactItemModel>>('assets/data/contact.json');
    }
}
