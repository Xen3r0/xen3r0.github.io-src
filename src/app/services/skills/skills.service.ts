// Angular
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
// Dependencies
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
// Models
import {SkillItemModel} from '../../models/skill-item.model';
// Services
import {DataInterface} from '../data.interface';

@Injectable()
export class SkillsService implements DataInterface {
    constructor(private httpClient: HttpClient) {
    }

    /**
     * Get all skill items
     */
    getAll(): Observable<Array<SkillItemModel>> {
        return this.httpClient.get<Array<SkillItemModel>>('assets/data/skills.json').pipe(
            map((items: Array<SkillItemModel>) => {
                items.sort(this.orderItems);

                return items;
            })
        );
    }

    private orderItems(a: SkillItemModel, b: SkillItemModel): number {
        if (a.percent > b.percent) {
            return -1;
        }
        if (a.percent < b.percent) {
            return 1;
        }

        return 0;
    }
}
