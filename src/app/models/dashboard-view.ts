
export class DashboardView {
    id: number;
    name: string;
    order: number;

    constructor(id: number, name: string, order: number) {
        this.id = id;
        this.name = name;
        this.order = order;
    }

    get Id(): number {
        return this.id;
    }

    set Id(value: number) {
        this.id = value;
    }

    get Name(): string {
        return this.name;
    }

    set Name(value: string) {
        this.name = value;
    }

    get Order(): number {
        return this.order;
    }

    set Order(value: number) {
        this.order = value;
    }
}
