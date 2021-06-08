import { Component, OnDestroy, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { LayoutManagerService } from '../../services/layout-manager.service';
import { Grid } from '../../models/grid';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Subscription } from 'rxjs';


@Component({
    selector: 'app-grid-list',
    templateUrl: './app-grid-list.component.html',
    styleUrls: ['./app-grid-list.component.css']
})
export class AppGridListComponent implements OnInit, OnDestroy {

    public grid: Grid[] = [];
    subscription1: Subscription;
    subscription2: Subscription;
    subscription3: Subscription;
    // tslint:disable-next-line: no-input-rename
    @Input('viewId') viewId: number;

    @Output() gridOutput = new EventEmitter<Grid[]>();

    constructor(public layoutManagerService: LayoutManagerService) { }

    ngOnInit(): void {
        this.viewId === undefined ? this.layoutManagerService.initializeMyGrid() :
            this.layoutManagerService.initializeMyGridById(this.viewId);
        this.subscription1 = this.layoutManagerService.getObservable().subscribe((res: Grid[]) => {
            this.grid = res;
        });
    }

    drop(event: CdkDragDrop<string[]>): void {
        moveItemInArray(this.grid, event.previousIndex, event.currentIndex);
        this.updateGrid();
    }

    updateGrid(): void {
        this.layoutManagerService.updateGridList(this.grid);
        this.subscription2 = this.layoutManagerService.getObservable().subscribe((res: Grid[]) => {
            this.grid = res;
        });
        console.log(this.grid);
    }

    saveGrid(): void {
        console.log('saving grid');
        this.layoutManagerService.saveGridList();
        this.gridOutput.emit(this.grid);
    }

    resetGrid(): void {
        console.log('resetting grid');
        this.grid = this.layoutManagerService.getGridListById(this.viewId);
        this.gridOutput.emit(this.grid);
    }

    getGridDataUpdate(grd: Grid): void {
        this.layoutManagerService.updateGridData(this.grid, grd);
        this.subscription3 = this.layoutManagerService.getObservable().subscribe((res: Grid[]) => {
            this.grid = res;
        });
        console.log(this.grid);
    }

    ngOnDestroy(): void {
        this.subscription1.unsubscribe();
        this.subscription2.unsubscribe();
        this.subscription3.unsubscribe();
    }
}
