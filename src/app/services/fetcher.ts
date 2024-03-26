import {Observable} from 'rxjs';

export interface FetcherInterface {
    fetch(): Observable<any>;
}
