// Angular
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {TestBed} from '@angular/core/testing';
// Services
import {SchoolService} from './school.service';
// Testing
import {getSchoolMockData} from '../../../../testing/school.testing';

describe('Services', () => {
    describe('SchoolService', () => {
        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [HttpClientTestingModule],
                providers: [SchoolService]
            });
        });

        it('should be created', () => {
            const service: SchoolService = TestBed.get(SchoolService);
            expect(service).toBeTruthy();
        });

        it('should be get all items', () => {
            const service: SchoolService = TestBed.get(SchoolService);
            const httpTestingController: HttpTestingController = TestBed.get(HttpTestingController);
            const request = service.getAll();
            const testData = getSchoolMockData();

            request.subscribe((data) => {
                expect(data).toEqual(testData);
            });

            const req = httpTestingController.expectOne('assets/data/school.json');
            expect(req.request.method).toEqual('GET');

            req.flush(testData);

            httpTestingController.verify();
        });
    });
});
