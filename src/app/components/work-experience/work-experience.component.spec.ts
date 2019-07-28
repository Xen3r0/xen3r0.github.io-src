// Angular
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {NO_ERRORS_SCHEMA} from '@angular/core';
// Components
import {WorkExperienceComponent} from './work-experience.component';

describe('Components', () => {
    describe('WorkExperienceComponent', () => {
        let component: WorkExperienceComponent;
        let fixture: ComponentFixture<WorkExperienceComponent>;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                declarations: [WorkExperienceComponent],
                schemas: [NO_ERRORS_SCHEMA]
            }).compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(WorkExperienceComponent);
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
