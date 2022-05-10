// Angular
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {TestBed} from '@angular/core/testing';
// Services
import {EducationService} from './education.service';
// Testing
import {getEducationMockData} from '../../../../testing/education.testing';

describe('Services', () => {
    describe('EducationService', () => {
        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [HttpClientTestingModule],
                providers: [EducationService]
            });
        });

        it('should be created', () => {
            const service: EducationService = TestBed.inject(EducationService);
            expect(service).toBeTruthy();
        });

        it('should be get all items', () => {
            const service: EducationService = TestBed.inject(EducationService);
            const httpTestingController: HttpTestingController = TestBed.inject(HttpTestingController);
            const request = service.getAll();
            const testData = getEducationMockData();

            request.subscribe((data) => {
                expect(data).toEqual(testData);
            });

            const req = httpTestingController.expectOne('assets/data/education.json');
            expect(req.request.method).toEqual('GET');

            req.flush(testData);

            httpTestingController.verify();
        });
    });
});
