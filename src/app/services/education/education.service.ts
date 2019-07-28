// Angular
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
// Dependencies
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
// Models
import {EducationItemModel} from '../../models/education-item.model';
// Services
import {DataInterface} from '../data.interface';

@Injectable()
export class EducationService implements DataInterface {
    constructor(private httpClient: HttpClient) {
    }

    /**
     * Get all education items
     */
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
