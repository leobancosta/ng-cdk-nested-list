import { CdkDragDrop, moveItemInArray, CdkDropList, transferArrayItem, CdkDrag, CdkDragEnter } from '@angular/cdk/drag-drop';
import { AfterViewInit, Component, OnDestroy, OnInit, QueryList, ViewChildren } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserViews } from '../../models/user-views';
import { DashboardViewsService } from '../../services/dashboard-views.service';
import { NotificationService } from '../../services/notification.service';
import { ConfirmDialogComponent, ConfirmDialogModel } from '../dialog/confirm-dialog.component';
import { DashboardView } from '../../models/dashboard-view';
import { CategoryMenu } from '../../models/category-menu';

@Component({
    selector: 'app-side-nav',
    templateUrl: './side-nav.component.html',
    styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit, OnDestroy {

    userId: number;
    viewId: number;
    userView: UserViews;
    categoryMenus: CategoryMenu[];
    subscription: Subscription;
    subscription1: Subscription;
    subscription2: Subscription;
    connectedTo: any[] = [];
    public result: any;
    selectedItem: string;

    constructor(
        private dashboardViewsService: DashboardViewsService,
        public dialog: MatDialog,
        private activatedRoute: ActivatedRoute,
        private notificationService: NotificationService
    ) { }

    ngOnInit(): void {
        this.activatedRoute.paramMap.subscribe(params => {
            this.userId = Number(params.get('id'));
            this.viewId = Number(params.get('viewId'));
            console.log('USER ID : ' + this.userId);
            console.log('VIEW ID : ' + this.viewId);
        });
        this.dashboardViewsService.initializeUserViews(this.userId);
        this.subscription = this.dashboardViewsService.getObservable().subscribe((res: UserViews) => {
            this.userView = res;
            this.categoryMenus = this.userView.menus;
        });

        this.userView.menus.forEach((menu: CategoryMenu) => {
            this.connectedTo.push(menu.id);
        });
    }

    getUserViews(userId: number): UserViews {
        return this.dashboardViewsService.getUserViewsById(userId);
    }

    dropParent(event: CdkDragDrop<string[]>): void {
        if (event.previousContainer === event.container) {
            moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
        } else {
            transferArrayItem(event.previousContainer.data,
                event.container.data,
                event.previousIndex,
                event.currentIndex);
        }
    }

    // tslint:disable-next-line: typedef
    dropItem(event: CdkDragDrop<string[]>): void {
        console.log('previous data : ' + event.previousContainer.id);
        console.log('current data : ' + event.container.id);
        if (event.previousContainer === event.container) {
            moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
        } else {
            transferArrayItem(event.previousContainer.data,
                event.container.data,
                event.previousIndex,
                event.currentIndex);
        }
    }

    confirmDialog(): void {
        const message = 'Save Side Menu?';
        const dialogData = new ConfirmDialogModel('Confirm Action', message);
        const dialogRef = this.dialog.open(ConfirmDialogComponent, {
            maxWidth: '400px',
            data: dialogData
        });
        dialogRef.afterClosed().subscribe(dialogResult => {
            if (dialogResult) {
                this.saveUserViews();
                this.result = this.userView.menus;
            }
        });
    }

    confirmResetDialog(): void {
        const message = 'Reset Side Menu?';
        const dialogData = new ConfirmDialogModel('Confirm Action', message);
        const dialogRef = this.dialog.open(ConfirmDialogComponent, {
            maxWidth: '400px',
            data: dialogData
        });

        dialogRef.afterClosed().subscribe(dialogResult => {
            if (dialogResult) {
                this.userView = this.getUserViews(this.userId);
                this.result = this.userView.menus;
            }
        });
    }

    saveUserViews(): void {
        this.dashboardViewsService.saveViews(this.userView);
        this.subscription2 = this.dashboardViewsService.getObservable().subscribe((res: UserViews) => {
            this.userView = res;
        });
        this.notificationService.showSuccess('Dashboard Views Saved!');
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
        this.subscription1.unsubscribe();
        this.subscription2.unsubscribe();
    }

    public updateItem(newDashboardName: string, itemIndex: number, headerIndex: number): void {
        if (newDashboardName) {
            // tslint:disable-next-line: prefer-const
            let subMenu: CategoryMenu = this.userView.menus[headerIndex];
            // tslint:disable-next-line: prefer-const
            let menuItem: DashboardView = subMenu.views[itemIndex];
            menuItem.name = newDashboardName;

            subMenu.views.splice(itemIndex, 1, menuItem);
            // tslint:disable-next-line: prefer-const
            let subMenus: CategoryMenu[] = this.userView.menus;
            subMenus.splice(headerIndex, 1, subMenu);
            this.userView.menus = subMenus;
        }
    }

    // tslint:disable-next-line: typedef
    public updateHeader(headerName: string, index: number) {
        if (headerName) {
            // tslint:disable-next-line: prefer-const
            let subMenus: CategoryMenu[] = this.userView.menus;
            // tslint:disable-next-line: prefer-const
            let subM: CategoryMenu = subMenus[index];

            subM.name = headerName;
            subMenus.splice(index, 1, subM);
            this.userView.menus = subMenus;
        }
    }


    drop(event: CdkDragDrop<string[]>): void {
        if (event.previousContainer === event.container) {
            moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
        } else {
            transferArrayItem(event.previousContainer.data,
                event.container.data,
                event.previousIndex,
                event.currentIndex);
        }
    }

    getConnectedList(): any[] {
        return this.categoryMenus.map(x => `${x.id}`);
    }

    dropGroup(event: CdkDragDrop<string[]>): void {
        console.log('previous index : ' + event.previousIndex);
        console.log('current index : ' + event.currentIndex);
        // if (event.currentIndex === 0) {

        // } else {
        moveItemInArray(this.categoryMenus, event.previousIndex, event.currentIndex);
        // }

    }

    public defaultPredicate(item: CdkDrag<CategoryMenu>): boolean {
        return item.data.name === 'My Dashboards';
    }

    selectItem(name: string): void {
        this.selectedItem = name;
    }
}
