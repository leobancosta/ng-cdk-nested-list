import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppGridListComponent } from './app-grid-list.component';
import { MatGridListModule } from '@angular/material/grid-list';


describe('AppGridListComponent', () => {
    let component: AppGridListComponent;
    let fixture: ComponentFixture<AppGridListComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [AppGridListComponent],
            imports: [
                MatGridListModule,

            ]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(AppGridListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
