// Angular
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {NO_ERRORS_SCHEMA} from '@angular/core';
// Dependencies
import {of} from 'rxjs';
// Components
import {SchoolComponent} from './school.component';
// Models
import {SchoolItemModel} from '../../models/school-item.model';
// Services
import {SchoolService} from '../../services/school/school.service';
import {getSchoolMockData} from '../../../../testing/school.testing';

describe('Components', () => {
    describe('SchoolComponent', () => {
        let component: SchoolComponent;
        let fixture: ComponentFixture<SchoolComponent>;

        let schoolServiceStub: SchoolService;

        let mockData: Array<SchoolItemModel>;

        beforeEach(() => {
            mockData = getSchoolMockData();
        });

        beforeEach(() => {
            schoolServiceStub = {
                getAll: jasmine.createSpy('getAll').and.returnValue(of(mockData))
            } as any;
        });

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                declarations: [SchoolComponent],
                providers: [
                    {provide: SchoolService, useValue: schoolServiceStub},
                ],
                schemas: [NO_ERRORS_SCHEMA]
            }).compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(SchoolComponent);
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
