import {NO_ERRORS_SCHEMA} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';

import {of} from 'rxjs';

import {SkillsComponent} from '@app/components/skills/skills.component';

import {SkillItemModel} from '@app/models/skill-item.model';

import {SkillsFetcher} from '@app/services/skills/skills-fetcher.service';

import {getSkillsMockData} from '@app-testing/skills.testing';

describe('Components', () => {
    describe('SkillsComponent', () => {
        let component: SkillsComponent;
        let fixture: ComponentFixture<SkillsComponent>;

        let skillsFetcherStub: SkillsFetcher;

        let mockData: Array<SkillItemModel>;

        beforeEach(() => {
            mockData = getSkillsMockData();
        });

        beforeEach(() => {
            skillsFetcherStub = {
                getAll: jasmine.createSpy('getAll').and.returnValue(of(mockData))
            } as any;
        });

        beforeEach(async () => {
            await TestBed.configureTestingModule({
                imports: [SkillsComponent],
                providers: [
                    {provide: SkillsFetcher, useValue: skillsFetcherStub},
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
