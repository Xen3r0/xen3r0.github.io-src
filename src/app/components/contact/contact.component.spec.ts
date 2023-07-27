import {NO_ERRORS_SCHEMA} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';

import {of} from 'rxjs';

import {getContactMockData} from '../../../../testing/contact.testing';

import {ContactItemModel} from '../../models/contact-item.model';

import {ContactService} from '../../services/contact/contact.service';

import {ContactComponent} from './contact.component';

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
                declarations: [ContactComponent],
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
