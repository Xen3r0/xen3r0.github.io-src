// Angular
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
// Components
import {AboutComponent} from './about.component';

describe('Components', () => {
    describe('AboutComponent', () => {
        let component: AboutComponent;
        let fixture: ComponentFixture<AboutComponent>;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                declarations: [AboutComponent]
            }).compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(AboutComponent);
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
