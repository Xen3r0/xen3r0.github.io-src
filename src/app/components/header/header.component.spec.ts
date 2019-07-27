// Angular
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
// Components
import {HeaderComponent} from './header.component';
// Pipes
import {AgePipe} from '../../pipes/age/age.pipe';

describe('Components', () => {
    describe('HeaderComponent', () => {
        let component: HeaderComponent;
        let fixture: ComponentFixture<HeaderComponent>;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                declarations: [HeaderComponent, AgePipe]
            }).compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(HeaderComponent);
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
