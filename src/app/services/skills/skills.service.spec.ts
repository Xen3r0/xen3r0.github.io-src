import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {TestBed} from '@angular/core/testing';

import {SkillsService} from '@app/services/skills/skills.service';

import {getSkillsMockData} from '@app-testing/skills.testing';

describe('Services', () => {
    describe('SkillsService', () => {
        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [HttpClientTestingModule],
                providers: [SkillsService]
            });
        });

        it('should be created', () => {
            const service: SkillsService = TestBed.inject(SkillsService);
            expect(service).toBeTruthy();
        });

        it('should be get all items', () => {
            const service: SkillsService = TestBed.inject(SkillsService);
            const httpTestingController: HttpTestingController = TestBed.inject(HttpTestingController);
            const request = service.getAll();
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
