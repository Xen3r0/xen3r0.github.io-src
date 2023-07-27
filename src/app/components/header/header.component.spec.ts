import {ComponentFixture, TestBed} from '@angular/core/testing';

import {AgePipe} from '../../pipes/age/age.pipe';

import {HeaderComponent} from './header.component';

describe('Components', () => {
    describe('HeaderComponent', () => {
        let component: HeaderComponent;
        let fixture: ComponentFixture<HeaderComponent>;

        beforeEach(async () => {
            await TestBed.configureTestingModule({
                declarations: [HeaderComponent, AgePipe]
            }).compileComponents();

            fixture = TestBed.createComponent(HeaderComponent);
            component = fixture.componentInstance;
            fixture.detectChanges();
        });

        it('should create', () => {
            expect(component).toBeTruthy();
        });
    });
});
