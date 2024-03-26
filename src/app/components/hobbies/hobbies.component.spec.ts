import {NO_ERRORS_SCHEMA} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';

import {HobbiesComponent} from '@app/components/hobbies/hobbies.component';

describe('Components', () => {
    describe('HobbiesComponent', () => {
        let component: HobbiesComponent;
        let fixture: ComponentFixture<HobbiesComponent>;

        beforeEach(async () => {
            await TestBed.configureTestingModule({
                imports: [HobbiesComponent],
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
