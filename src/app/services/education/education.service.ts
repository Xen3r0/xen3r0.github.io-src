import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

import {EducationItemModel} from '@app/models/education-item.model';

import {DataInterface} from '@app/services/data.interface';

@Injectable()
export class EducationService implements DataInterface {
    constructor(private httpClient: HttpClient) {
    }

    getAll(): Observable<Array<EducationItemModel>> {
        return this.httpClient.get<Array<EducationItemModel>>('assets/data/education.json').pipe(
            map((items: Array<EducationItemModel>) => {
                items.sort(this.orderItems);

                return items;
            })
        );
    }

    private orderItems(a: EducationItemModel, b: EducationItemModel): number {
        if (a.year > b.year) {
            return -1;
        }
        if (a.year < b.year) {
            return 1;
        }

        return 0;
    }
}
