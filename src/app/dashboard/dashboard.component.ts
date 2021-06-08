import { Component, OnInit } from '@angular/core';
import { ConfirmDialogModel, ConfirmDialogComponent } from '../components/dialog/confirm-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { Grid } from '../models/grid';
import { ActivatedRoute } from '@angular/router';
import { NotificationService } from '../services/notification.service';


@Component({
    selector: 'app-home',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    // tslint:disable-next-line: no-inferrable-types
    viewId: number;
    result: any;
    constructor(public dialog: MatDialog, private activatedRoute: ActivatedRoute, private notificationService: NotificationService) { }

    ngOnInit(): void {
        this.activatedRoute.paramMap.subscribe(params => {
            this.viewId = Number(params.get('id'));
        });
    }

    confirmDialog(): void {
        const message = 'Save Layout?';
        const dialogData = new ConfirmDialogModel('Confirm Action', message);
        const dialogRef = this.dialog.open(ConfirmDialogComponent, {
            maxWidth: '400px',
            data: dialogData
        });
        dialogRef.afterClosed().subscribe(dialogResult => {
            if (dialogResult) {
                const saveButton: HTMLElement = document.getElementById('triggerChildSave') as HTMLElement;
                saveButton.click();
            }
        });
    }

    confirmResetDialog(): void {
        const message = 'Reset Layout?';
        const dialogData = new ConfirmDialogModel('Confirm Action', message);
        const dialogRef = this.dialog.open(ConfirmDialogComponent, {
            maxWidth: '400px',
            data: dialogData
        });

        dialogRef.afterClosed().subscribe(dialogResult => {
            if (dialogResult) {
                const resetbutton: HTMLElement = document.getElementById('triggerChildReset') as HTMLElement;
                resetbutton.click();
            }
        });
    }

    getEventGrid(grid: Grid[]): void {
        this.notificationService.showSuccess('Grid Layout Saved!');
        this.result = grid;
    }
}
