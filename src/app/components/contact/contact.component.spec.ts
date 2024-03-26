import {NO_ERRORS_SCHEMA} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';

import {of} from 'rxjs';

import {ContactComponent} from '@app/components/contact/contact.component';

import {ContactItemModel} from '@app/models/contact-item.model';

import {ContactService} from '@app/services/contact/contact.service';

import {getContactMockData} from '@app-testing/contact.testing';

describe('Components', () => {
    describe('ContactComponent', () => {
        let component: ContactComponent;
        let fixture: ComponentFixture<ContactComponent>;

        let contactServiceStub: ContactService;

        let mockData: Array<ContactItemModel>;

        beforeEach(() => {
            mockData = getContactMockData();
        });

        beforeEach(() => {
            contactServiceStub = {
                getAll: jasmine.createSpy('getAll').and.returnValue(of(mockData))
            } as any;
        });

        beforeEach(async () => {
            await TestBed.configureTestingModule({
                imports: [ContactComponent],
                providers: [
                    {provide: ContactService, useValue: contactServiceStub},
                ],
                schemas: [NO_ERRORS_SCHEMA]
            }).compileComponents();

            fixture = TestBed.createComponent(ContactComponent);
            component = fixture.componentInstance;
            fixture.detectChanges();
        });

        it('should create', () => {
            expect(component).toBeTruthy();
        });
    });
});
