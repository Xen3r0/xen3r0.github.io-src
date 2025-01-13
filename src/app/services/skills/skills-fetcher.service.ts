import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

import {Observable} from 'rxjs';

import {SkillModel} from '@app/models/skill-item.model';

import {FetcherInterface} from '@app/services/fetcher';

@Injectable({providedIn: 'root'})
export class SkillsFetcher implements FetcherInterface {
    constructor(private httpClient: HttpClient) {
    }

    fetch(): Observable<SkillModel> {
        return this.httpClient.get<SkillModel>('/data/skills.json');
    }
}
