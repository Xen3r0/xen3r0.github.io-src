import {NO_ERRORS_SCHEMA} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';

import {of} from 'rxjs';

import {SkillsComponent} from '@app/components/skills/skills.component';

import {SkillItemModel} from '@app/models/skill-item.model';

import {SkillsService} from '@app/services/skills/skills.service';

import {getSkillsMockData} from '@app-testing/skills.testing';

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
