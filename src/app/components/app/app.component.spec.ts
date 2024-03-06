import {NO_ERRORS_SCHEMA} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';

import {AppComponent} from '@app/components/app/app.component';

describe('Components', () => {
    describe('AppComponent', () => {
        let component: AppComponent;
        let fixture: ComponentFixture<AppComponent>;

        beforeEach(async() => {
            await TestBed.configureTestingModule({
                declarations: [AppComponent],
                schemas: [NO_ERRORS_SCHEMA]
            }).compileComponents();

            fixture = TestBed.createComponent(AppComponent);
            component = fixture.componentInstance;
        });


        it('should create the app', () => {
            fixture = TestBed.createComponent(AppComponent);
            component = fixture.debugElement.componentInstance;
            expect(component).toBeTruthy();
        });
    });
});
