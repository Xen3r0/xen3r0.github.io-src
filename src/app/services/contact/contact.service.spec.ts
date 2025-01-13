import {provideHttpClient, withInterceptorsFromDi} from '@angular/common/http';
import {HttpTestingController, provideHttpClientTesting} from '@angular/common/http/testing';
import {TestBed} from '@angular/core/testing';

import {ContactService} from '@app/services/contact/contact.service';

import {getContactMockData} from '@app-testing/contact.testing';

describe('Services', () => {
    describe('ContactService', () => {
        beforeEach(() => {
            TestBed.configureTestingModule({
                providers: [
                    ContactService,
                    provideHttpClient(withInterceptorsFromDi()),
                    provideHttpClientTesting()
                ]
            });
        });

        it('should be created', () => {
            const service: ContactService = TestBed.inject(ContactService);
            expect(service).toBeTruthy();
        });

        it('should be get all items', () => {
            const service: ContactService = TestBed.inject(ContactService);
            const httpTestingController: HttpTestingController = TestBed.inject(HttpTestingController);
            const request = service.fetch();
            const testData = getContactMockData();

            request.subscribe((data) => {
                expect(data).toEqual(testData);
            });

            const req = httpTestingController.expectOne('/data/contact.json');
            expect(req.request.method).toEqual('GET');

            req.flush(testData);

            httpTestingController.verify();
        });
    });
});
