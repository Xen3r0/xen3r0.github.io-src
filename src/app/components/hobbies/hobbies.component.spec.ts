// Angular
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {NO_ERRORS_SCHEMA} from '@angular/core';
// Dependencies
import {of} from 'rxjs';
// Components
import {HobbiesComponent} from './hobbies.component';
// Models
import {HobbyItemModel} from '../../models/hobby-item.model';
// Services
import {HobbiesService} from '../../services/hobbies/hobbies.service';
// Testing
import {getHobbiesMockData} from '../../../../testing/hobbies.testing';

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

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                declarations: [HobbiesComponent],
                providers: [
                    {provide: HobbiesService, useValue: hobbiesServiceStub},
                ],
                schemas: [NO_ERRORS_SCHEMA]
            }).compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(HobbiesComponent);
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
