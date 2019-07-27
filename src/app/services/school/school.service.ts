// Angular
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
// Dependencies
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
// Models
import {SchoolItemModel} from '../../models/school-item.model';
// Services
import {DataInterface} from '../data.interface';

@Injectable()
export class SchoolService implements DataInterface {
    constructor(private httpClient: HttpClient) {
    }

    /**
     * Get all school items
     */
    getAll(): Observable<Array<SchoolItemModel>> {
        return this.httpClient.get<Array<SchoolItemModel>>('assets/data/school.json').pipe(
            map((items: Array<SchoolItemModel>) => {
                items.sort(this.orderItems);

                return items;
            })
        );
    }

    private orderItems(a: SchoolItemModel, b: SchoolItemModel): number {
        if (a.year > b.year) {
            return -1;
        }
        if (a.year < b.year) {
            return 1;
        }

        return 0;
    }
}
