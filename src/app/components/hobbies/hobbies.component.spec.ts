import {NO_ERRORS_SCHEMA} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';

import {of} from 'rxjs';

import {HobbiesComponent} from '@app/components/hobbies/hobbies.component';

import {HobbyItemModel} from '@app/models/hobby-item.model';

import {HobbiesService} from '@app/services/hobbies/hobbies.service';

import {getHobbiesMockData} from '@app-testing/hobbies.testing';

describe('Components', () => {
    describe('HobbiesComponent', () => {
        let component: HobbiesComponent;
        let fixture: ComponentFixture<HobbiesComponent>;

        let hobbiesServiceStub: HobbiesService;

        let mockData: Array<HobbyItemModel>;

        beforeEach(() => {
            mockData = getHobbiesMockData();
        });

        beforeEach(() => {
            hobbiesServiceStub = {
                getAll: jasmine.createSpy('getAll').and.returnValue(of(mockData))
            } as any;
        });

        beforeEach(async () => {
            await TestBed.configureTestingModule({
                declarations: [HobbiesComponent],
                providers: [
                    {provide: HobbiesService, useValue: hobbiesServiceStub},
                ],
                schemas: [NO_ERRORS_SCHEMA]
            }).compileComponents();

            fixture = TestBed.createComponent(HobbiesComponent);
            component = fixture.componentInstance;
            fixture.detectChanges();
        });

        it('should create', () => {
            expect(component).toBeTruthy();
        });
    });
});
