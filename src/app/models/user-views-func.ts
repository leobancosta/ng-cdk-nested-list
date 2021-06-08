import { UserViews } from './user-views';
import { DashboardView } from './dashboard-view';
import { CategoryMenu } from './category-menu';

export function getUserViewsFunction(): UserViews[] {
    const views0: DashboardView[] = [
        new DashboardView(10, 'default-dashboard', 1),
        new DashboardView(11, 'market-dashboard', 2),
        new DashboardView(22, 'leads-dashboard', 3),
        new DashboardView(33, 'campaign-dashboard', 4),
        new DashboardView(44, 'contacts-dashboard', 5),
        new DashboardView(55, 'overall-dashboard', 6)
    ];
    const menus0: CategoryMenu = new CategoryMenu(
        100, 'My Dashboards', views0
    );
    const views1: DashboardView[] = [
        new DashboardView(66, 'first-dashboard', 1),
        new DashboardView(77, 'second-dashboard', 2),
        new DashboardView(88, 'third-dashboard', 3),
        new DashboardView(99, 'forth-dashboard', 4),
        new DashboardView(100, 'fifth-dashboard', 5),
        new DashboardView(110, 'sixth-dashboard', 6)
    ];
    const menus1: CategoryMenu = new CategoryMenu(
        200, 'Assets Overview', views1
    );

    const categoryMenus0: CategoryMenu[] = [menus0, menus1];

    const views2: DashboardView[] = [
        new DashboardView(120, 'first-dashboard', 1),
        new DashboardView(130, 'second-dashboard', 2),
        new DashboardView(140, 'third-dashboard', 3),
        new DashboardView(150, 'forth-dashboard', 4),
        new DashboardView(160, 'fifth-dashboard', 5),
        new DashboardView(170, 'sixth-dashboard', 6)
    ];

    const views3: DashboardView[] = [
        new DashboardView(180, 'first-dashboard', 1),
        new DashboardView(190, 'second-dashboard', 2),
        new DashboardView(200, 'third-dashboard', 3),
        new DashboardView(210, 'forth-dashboard', 4),
        new DashboardView(220, 'fifth-dashboard', 5),
        new DashboardView(230, 'sixth-dashboard', 6)
    ];
    const menus2: CategoryMenu = new CategoryMenu(
        300, 'My Dashboards', views2
    );
    const menus4: CategoryMenu = new CategoryMenu(
        400, 'Sales Analytics', views3
    );

    const categoryMenus1: CategoryMenu[] = [menus2, menus4];

    const userView: UserViews = new UserViews(123, 'lebron', 'james', categoryMenus0);
    const userView1: UserViews = new UserViews(124, 'russel', 'westbrook', categoryMenus1);

    return [userView, userView1];
}
