import {NO_ERRORS_SCHEMA} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';

import {of} from 'rxjs';

import {getEducationMockData} from '../../../../testing/education.testing';

import {EducationItemModel} from '../../models/education-item.model';

import {EducationService} from '../../services/education/education.service';

import {EducationComponent} from './education.component';

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

        beforeEach(async () => {
            await TestBed.configureTestingModule({
                declarations: [EducationComponent],
                providers: [
                    {provide: EducationService, useValue: educationServiceStub},
                ],
                schemas: [NO_ERRORS_SCHEMA]
            }).compileComponents();

            fixture = TestBed.createComponent(EducationComponent);
            component = fixture.componentInstance;
            fixture.detectChanges();
        });

        it('should create', () => {
            expect(component).toBeTruthy();
        });
    });
});
