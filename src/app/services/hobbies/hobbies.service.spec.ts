// Angular
import {TestBed} from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
// Services
import {HobbiesService} from './hobbies.service';
// Testing
import {getHobbiesMockData} from '../../../../testing/hobbies.testing';

describe('Services', () => {
    describe('HobbiesService', () => {
        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [HttpClientTestingModule],
                providers: [HobbiesService]
            });
        });

        it('should be created', () => {
            const service: HobbiesService = TestBed.get(HobbiesService);
            expect(service).toBeTruthy();
        });

        it('should be get all items', () => {
            const service: HobbiesService = TestBed.get(HobbiesService);
            const httpTestingController: HttpTestingController = TestBed.get(HttpTestingController);
            const request = service.getAll();
            const testData = getHobbiesMockData();

            request.subscribe((data) => {
                expect(data).toEqual(testData);
            });

            const req = httpTestingController.expectOne('assets/data/hobbies.json');
            expect(req.request.method).toEqual('GET');

            req.flush(testData);

            httpTestingController.verify();
        });
    });
});
