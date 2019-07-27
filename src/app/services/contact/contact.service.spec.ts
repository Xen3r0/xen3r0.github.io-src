// Angular
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {TestBed} from '@angular/core/testing';
// Services
import {ContactService} from './contact.service';
// Testing
import {getContactMockData} from '../../../../testing/contact.testing';

describe('Services', () => {
    describe('ContactService', () => {
        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [HttpClientTestingModule],
                providers: [ContactService]
            });
        });

        it('should be created', () => {
            const service: ContactService = TestBed.get(ContactService);
            expect(service).toBeTruthy();
        });

        it('should be get all items', () => {
            const service: ContactService = TestBed.get(ContactService);
            const httpTestingController: HttpTestingController = TestBed.get(HttpTestingController);
            const request = service.getAll();
            const testData = getContactMockData();

            request.subscribe((data) => {
                expect(data).toEqual(testData);
            });

            const req = httpTestingController.expectOne('assets/data/contact.json');
            expect(req.request.method).toEqual('GET');

            req.flush(testData);

            httpTestingController.verify();
        });
    });
});
