// Dependencies
import {Observable} from 'rxjs';
import {SchoolItemModel} from '../models/school-item.model';

export interface DataInterface {
    getAll(): Observable<any>;
}
