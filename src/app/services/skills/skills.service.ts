import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

import {SkillItemModel} from '@app/models/skill-item.model';

import {DataInterface} from '@app/services/data.interface';

@Injectable()
export class SkillsService implements DataInterface {
    constructor(private httpClient: HttpClient) {
    }

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
