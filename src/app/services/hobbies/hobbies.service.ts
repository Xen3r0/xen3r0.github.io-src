// Angular
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
// Dependencies
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
// Models
import {HobbyItemModel} from '../../models/hobby-item.model';
// Services
import {DataInterface} from '../data.interface';

@Injectable()
export class HobbiesService implements DataInterface {
    constructor(private httpClient: HttpClient) {
    }

    /**
     * Get all hobby items
     */
    getAll(): Observable<Array<HobbyItemModel>> {
        return this.httpClient.get<Array<HobbyItemModel>>('assets/data/hobbies.json');
    }
}
