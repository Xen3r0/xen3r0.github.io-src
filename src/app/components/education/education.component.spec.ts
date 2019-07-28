// Angular
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {NO_ERRORS_SCHEMA} from '@angular/core';
// Dependencies
import {of} from 'rxjs';
// Components
import {EducationComponent} from './education.component';
// Models
import {EducationItemModel} from '../../models/education-item.model';
// Services
import {EducationService} from '../../services/education/education.service';
// Testing
import {getEducationMockData} from '../../../../testing/education.testing';

describe('Components', () => {
    describe('EducationComponent', () => {
        let component: EducationComponent;
        let fixture: ComponentFixture<EducationComponent>;

        let educationServiceStub: EducationService;

        let mockData: Array<EducationItemModel>;

        beforeEach(() => {
            mockData = getEducationMockData();
        });

        beforeEach(() => {
            educationServiceStub = {
                getAll: jasmine.createSpy('getAll').and.returnValue(of(mockData))
            } as any;
        });

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                declarations: [EducationComponent],
                providers: [
                    {provide: EducationService, useValue: educationServiceStub},
                ],
                schemas: [NO_ERRORS_SCHEMA]
            }).compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(EducationComponent);
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
