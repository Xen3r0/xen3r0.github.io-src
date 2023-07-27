import {NO_ERRORS_SCHEMA} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';

import {of} from 'rxjs';

import {getSkillsMockData} from '../../../../testing/skills.testing';

import {SkillItemModel} from '../../models/skill-item.model';

import {SkillsService} from '../../services/skills/skills.service';

import {SkillsComponent} from './skills.component';

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

        beforeEach(async () => {
            await TestBed.configureTestingModule({
                declarations: [SkillsComponent],
                providers: [
                    {provide: SkillsService, useValue: skillsServiceStub},
                ],
                schemas: [NO_ERRORS_SCHEMA]
            }).compileComponents();

            fixture = TestBed.createComponent(SkillsComponent);
            component = fixture.componentInstance;
            fixture.detectChanges();
        });

        it('should create', () => {
            expect(component).toBeTruthy();
        });
    });
});
