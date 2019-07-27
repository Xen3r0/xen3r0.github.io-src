// Angular
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {NO_ERRORS_SCHEMA} from '@angular/core';
// Dependencies
import {of} from 'rxjs';
// Components
import {SkillsComponent} from './skills.component';
// Models
import {SkillItemModel} from '../../models/skill-item.model';
// Services
import {SkillsService} from '../../services/skills/skills.service';
// Testing
import {getSkillsMockData} from '../../../../testing/skills.testing';

describe('Components', () => {
    describe('SkillsComponent', () => {
        let component: SkillsComponent;
        let fixture: ComponentFixture<SkillsComponent>;

        let skillsServiceStub: SkillsService;

        let mockData: Array<SkillItemModel>;

        beforeEach(() => {
            mockData = getSkillsMockData();
        });

        beforeEach(() => {
            skillsServiceStub = {
                getAll: jasmine.createSpy('getAll').and.returnValue(of(mockData))
            } as any;
        });

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                declarations: [SkillsComponent],
                providers: [
                    {provide: SkillsService, useValue: skillsServiceStub},
                ],
                schemas: [NO_ERRORS_SCHEMA]
            }).compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(SkillsComponent);
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
