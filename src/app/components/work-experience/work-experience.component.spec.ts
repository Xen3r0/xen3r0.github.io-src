import {NO_ERRORS_SCHEMA} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';

import {WorkExperienceComponent} from '@app/components/work-experience/work-experience.component';

describe('Components', () => {
    describe('WorkExperienceComponent', () => {
        let component: WorkExperienceComponent;
        let fixture: ComponentFixture<WorkExperienceComponent>;

        beforeEach(async () => {
            await TestBed.configureTestingModule({
                imports: [WorkExperienceComponent],
                schemas: [NO_ERRORS_SCHEMA]
            }).compileComponents();

            fixture = TestBed.createComponent(WorkExperienceComponent);
            component = fixture.componentInstance;
            fixture.detectChanges();
        });

        it('should create', () => {
            expect(component).toBeTruthy();
        });
    });
});
