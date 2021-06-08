export class GridData {

    index: number;
    type?: string;
    text?: string;
    cols?: string;
    rows?: string;
    color?: string;

    constructor(index: number, type: string, text: string, cols: string, rows: string, color: string) {
        this.index = index;
        this.type = type;
        this.text = text;
        this.cols = cols;
        this.rows = rows;
        this.color = color;
    }

    get Index(): number {
        return this.index;
    }

    set Index(value: number) {
        this.index = value;
    }

    get Type(): string {
        return this.type;
    }

    set Type(value: string) {
        this.type = value;
    }

    get Text(): string {
        return this.text;
    }

    set Text(value: string) {
        this.text = value;
    }
}
