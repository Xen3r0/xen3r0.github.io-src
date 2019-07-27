// Angular
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {NO_ERRORS_SCHEMA} from '@angular/core';
// Dependencies
import {of} from 'rxjs';
// Components
import {ContactComponent} from './contact.component';
// Models
import {ContactItemModel} from '../../models/contact-item.model';
// Services
import {ContactService} from '../../services/contact/contact.service';
// Testing
import {getContactMockData} from '../../../../testing/contact.testing';

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

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                declarations: [ContactComponent],
                providers: [
                    {provide: ContactService, useValue: contactServiceStub},
                ],
                schemas: [NO_ERRORS_SCHEMA]
            }).compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(ContactComponent);
            component = fixture.componentInstance;
            fixture.detectChanges();
        });

        afterEach(() => {
            if (fixture) {
                fixture.destroy();
            }
        });

        it('should create', () => {
            expect(component).toBeTruthy();
        });
    });
});
