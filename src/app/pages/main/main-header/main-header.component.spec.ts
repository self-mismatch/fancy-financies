import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MainHeaderComponent } from './main-header.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('MainHeaderComponent', () => {
    let component: MainHeaderComponent;
    let fixture: ComponentFixture<MainHeaderComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [RouterTestingModule, MainHeaderComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(MainHeaderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
