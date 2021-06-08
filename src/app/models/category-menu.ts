import { DashboardView } from './dashboard-view';

export class CategoryMenu {
    // tslint:disable-next-line: variable-name
    public id: number;
    // tslint:disable-next-line: variable-name
    public name: string;
    // tslint:disable-next-line: variable-name
    public views: DashboardView[];

    constructor(id: number, name: string, views: DashboardView[]) {
        this.id = id;
        this.name = name;
        this.views = views;
    }



}
