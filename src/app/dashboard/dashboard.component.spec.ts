import { ComponentFixture, TestBed, async, inject } from '@angular/core/testing';
import { HarnessLoader } from '@angular/cdk/testing';

import { Router } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { Observable, of } from 'rxjs';
import { NotificationService } from '../services/notification.service';
import { MatDialogHarness } from '@angular/material/dialog/testing/dialog-harness';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ɵNoopNgZone } from '@angular/core';
import { LayoutManagerService } from '../services/layout-manager.service';

class MockRouter {
    // tslint:disable-next-line: typedef
    navigateByUrl(url: string) { return url; }
}

class NotificationServiceMock {
    // tslint:disable-next-line: typedef
    showSuccess() {
        return {
            afterClosed: () => of(true)
        };
    }
    // tslint:disable-next-line: typedef
    showError() {
        return {
            afterClosed: () => of(true)
        };
    }
}

describe('HomeComponent', () => {
    let component: DashboardComponent;
    let fixture: ComponentFixture<DashboardComponent>;
    let layoutManagerService: LayoutManagerService;

    let layoutManagerServiceMock: jasmine.SpyObj<LayoutManagerService>;
    let notificationServiceMock: jasmine.SpyObj<NotificationService>;

    const mockDialogData = {
        open: jasmine.createSpy('open')
    };

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [
                MatDialogModule,
                MatSnackBarModule,
                ɵNoopNgZone
            ],
            declarations: [DashboardComponent],
            providers: [
                { provide: NotificationService, useClass: NotificationServiceMock }
            ]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(DashboardComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('trigger save by opening the dialog box', () => {

    });
});
