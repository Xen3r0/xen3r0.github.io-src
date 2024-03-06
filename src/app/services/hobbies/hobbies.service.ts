import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

import {Observable} from 'rxjs';

import {HobbyItemModel} from '@app/models/hobby-item.model';

import {DataInterface} from '@app/services/data.interface';

@Injectable()
export class HobbiesService implements DataInterface {
    constructor(private httpClient: HttpClient) {
    }

    getAll(): Observable<Array<HobbyItemModel>> {
        return this.httpClient.get<Array<HobbyItemModel>>('assets/data/hobbies.json');
    }
}
