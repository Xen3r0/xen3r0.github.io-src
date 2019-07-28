// Dependencies
import {Observable} from 'rxjs';
import {EducationItemModel} from '../models/education-item.model';

export interface DataInterface {
    getAll(): Observable<any>;
}
