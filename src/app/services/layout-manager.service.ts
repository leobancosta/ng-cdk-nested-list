import { Injectable } from '@angular/core';
import { Grid } from '../models/grid';
import { GridData } from '../models/grid-data';
import { BehaviorSubject, Observable } from 'rxjs';
import { getGridListFunction } from '../models/grid-data-func';

@Injectable({
    providedIn: 'root'
})
export class LayoutManagerService {

    private myGrid: BehaviorSubject<Grid[]>;

    initializeMyGridById(id: number): void {
        this.myGrid = new BehaviorSubject(this.getGridItems().filter(grids => grids.id === id));
    }

    initializeMyGrid(): void {
        this.myGrid = new BehaviorSubject(this.getGridItems().filter(grids => grids.id === 0));
    }

    getObservable(): Observable<Grid[]> {
        return this.myGrid.asObservable();
    }

    getGridListById(id: number): Grid[] {
        return this.getGridItems().filter(grids => grids.id === id);
    }

    getGridItems(): Grid[] {
        const gridList = getGridListFunction();
        this.sortData(gridList);
        return gridList;
    }

    sortData(data: Grid[]): void {
        data.sort((a, b) => (a.index > b.index) ? 1 : -1);
        data.forEach((value) => {
            value.data.sort((a, b) => (a.index > b.index) ? 1 : -1);
        });
    }

    sortDataItem(dataItem: GridData[]): void {
        dataItem.sort((a, b) => (a.index > b.index) ? 1 : -1);
    }

    get MyGrid(): BehaviorSubject<Grid[]> {
        return this.myGrid;
    }

    updateGridList(gridList: Grid[]): void {
        this.updateGridIndex(gridList);
        this.myGrid.next(gridList);
    }

    updateGridIndex(gridList: Grid[]): void {
        gridList.forEach((value, index) => {
            value.index = index + 1;
        });
    }

    getInitialValue(): Grid[] {
        return this.myGrid.getValue();
    }

    saveGridList(): void {
        console.log('saving to database......');
    }

    updateGridData(grid: Grid[], grd: Grid): void {
        this.replacePreviousGirdData(grid, grd);
        this.myGrid.next(grid);
    }

    replacePreviousGirdData(grid: Grid[], grd: Grid): void {
        const index = grid.findIndex(item => item.id === grd.id && item.index === grd.index);
        grid.splice(index, 1, grd);
    }
}
