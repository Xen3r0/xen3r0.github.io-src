import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {TestBed} from '@angular/core/testing';

import {ContactService} from '@app/services/contact/contact.service';

import {getContactMockData} from '@app-testing/contact.testing';

describe('Services', () => {
    describe('ContactService', () => {
        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [HttpClientTestingModule],
                providers: [ContactService]
            });
        });

        it('should be created', () => {
            const service: ContactService = TestBed.inject(ContactService);
            expect(service).toBeTruthy();
        });

        it('should be get all items', () => {
            const service: ContactService = TestBed.inject(ContactService);
            const httpTestingController: HttpTestingController = TestBed.inject(HttpTestingController);
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
