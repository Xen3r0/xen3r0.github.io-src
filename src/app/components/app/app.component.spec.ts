// Angular
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {NO_ERRORS_SCHEMA} from '@angular/core';
// Components
import {AppComponent} from './app.component';

describe('Components', () => {
    describe('AppComponent', () => {
        let component: AppComponent;
        let fixture: ComponentFixture<AppComponent>;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                declarations: [AppComponent],
                schemas: [NO_ERRORS_SCHEMA]
            }).compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(AppComponent);
            component = fixture.componentInstance;
        });

        afterEach(() => {
            if (fixture) {
                fixture.destroy();
            }
        });

        it('should create the app', () => {
            fixture = TestBed.createComponent(AppComponent);
            component = fixture.debugElement.componentInstance;
            expect(component).toBeTruthy();
        });
    });
});
