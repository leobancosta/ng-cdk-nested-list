import { DashboardView } from './dashboard-view';
import { CategoryMenu } from './category-menu';

export class UserViews {
    userId: number;
    firstname: string;
    lastname: string;
    menus: CategoryMenu[];
    views: DashboardView[];

    constructor(userId: number, firstname: string, lastname: string, menus: CategoryMenu[]) {
        this.userId = userId;
        this.firstname = firstname;
        this.lastname = lastname;
        this.menus = menus;
    }
}
