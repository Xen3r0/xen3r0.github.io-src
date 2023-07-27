import {Observable} from 'rxjs';

export interface DataInterface {
    getAll(): Observable<any>;
}
