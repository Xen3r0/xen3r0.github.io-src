// Angular
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {TestBed} from '@angular/core/testing';
// Services
import {SkillsService} from './skills.service';
// Testing
import {getSkillsMockData} from '../../../../testing/skills.testing';

describe('Services', () => {
    describe('SkillsService', () => {
        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [HttpClientTestingModule],
                providers: [SkillsService]
            });
        });

        it('should be created', () => {
            const service: SkillsService = TestBed.get(SkillsService);
            expect(service).toBeTruthy();
        });

        it('should be get all items', () => {
            const service: SkillsService = TestBed.get(SkillsService);
            const httpTestingController: HttpTestingController = TestBed.get(HttpTestingController);
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
