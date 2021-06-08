import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Grid } from '../../models/grid';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
    selector: 'app-grid-item',
    templateUrl: './app-grid-item.component.html',
    styleUrls: ['./app-grid-item.component.css']
})
export class AppGridItemComponent implements OnInit {

    // tslint:disable-next-line: no-input-rename
    @Input('grid') grid: Grid | undefined;
    @Output() gridDataUpdate = new EventEmitter<Grid>();
    constructor() { }

    ngOnInit(): void {
    }

    drop(event: CdkDragDrop<string[]>): void {
        moveItemInArray(this.grid.data, event.previousIndex, event.currentIndex);
        this.updateGridItemIndex();
    }

    updateGridItemIndex(): void {
        this.grid.data.forEach((value, index) => {
            value.index = index + 1;
        });
        this.gridDataUpdate.emit(this.grid);
    }
}
