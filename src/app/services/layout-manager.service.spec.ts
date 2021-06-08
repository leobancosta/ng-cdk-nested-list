import { TestBed } from '@angular/core/testing';

import { LayoutManagerService } from './layout-manager.service';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NgZone } from '@angular/core';

describe('LayoutManagerService', () => {
    let service: LayoutManagerService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(LayoutManagerService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
