import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReportFullComponent } from './report-full.component';

describe('ReportFullComponent', () => {
    let component: ReportFullComponent;
    let fixture: ComponentFixture<ReportFullComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ReportFullComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(ReportFullComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
