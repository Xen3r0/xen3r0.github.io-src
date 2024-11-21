import {provideHttpClient, withInterceptorsFromDi} from '@angular/common/http';
import {HttpTestingController, provideHttpClientTesting} from '@angular/common/http/testing';
import {TestBed} from '@angular/core/testing';

import {SkillsFetcher} from '@app/services/skills/skills-fetcher.service';

import {getSkillsMockData} from '@app-testing/skills.testing';

describe('Services', () => {
    describe('SkillsFetcher', () => {
        beforeEach(() => {
            TestBed.configureTestingModule({
                providers: [
                    SkillsFetcher,
                    provideHttpClient(withInterceptorsFromDi()),
                    provideHttpClientTesting()
                ]
            });
        });

        it('should be created', () => {
            const service: SkillsFetcher = TestBed.inject(SkillsFetcher);
            expect(service).toBeTruthy();
        });

        it('should be get all items', () => {
            const service: SkillsFetcher = TestBed.inject(SkillsFetcher);
            const httpTestingController: HttpTestingController = TestBed.inject(HttpTestingController);
            const request = service.fetch();
            const testData = getSkillsMockData();

            request.subscribe((data) => {
                expect(data).toEqual(testData);
            });

            const req = httpTestingController.expectOne('assets/data/skills.json');
            expect(req.request.method).toEqual('GET');

            req.flush(testData);

            httpTestingController.verify();
        });
    });
});
