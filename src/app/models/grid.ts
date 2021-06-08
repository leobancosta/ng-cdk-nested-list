import { GridData } from './grid-data';

export class Grid {
    id?: number;
    index: number;
    rows: string;
    colspan: string;
    rowspan: string;
    rowHeight: string;
    gutterSize: string;
    data: GridData[];

    // tslint:disable-next-line: max-line-length
    constructor(id: number, index: number, rows: string, colspan: string, rowspan: string, rowHeight: string, gutterSize: string, data: GridData[]) {
        this.id = id;
        this.index = index;
        this.rows = rows;
        this.colspan = colspan;
        this.rowspan = rowspan;
        this.rowHeight = rowHeight;
        this.gutterSize = gutterSize;
        this.data = data;
    }
}
