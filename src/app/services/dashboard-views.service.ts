import { Injectable } from '@angular/core';
import { DashboardView } from '../models/dashboard-view';
import { Subject, Observable, BehaviorSubject } from 'rxjs';
import { UserViews } from '../models/user-views';
import { getUserViewsFunction } from '../models/user-views-func';
import { CategoryMenu } from '../models/category-menu';

@Injectable({
    providedIn: 'root'
})
export class DashboardViewsService {

    views: UserViews;
    private viewsSubject: BehaviorSubject<UserViews>;

    constructor() { }

    initializeUserViews(userId: number): void {
        this.viewsSubject = new BehaviorSubject<UserViews>(this.getUserViews().filter(userView => userView.userId === userId).pop());
    }

    getObservable(): Observable<UserViews> {
        return this.ViewsSubject.asObservable();
    }

    get ViewsSubject(): Subject<UserViews> {
        return this.viewsSubject;
    }

    getUserViews(): UserViews[] {
        return getUserViewsFunction();
    }

    getUserViewsById(userId: number): UserViews {
        return this.getUserViews().filter(userView => userView.userId = userId).pop();
    }
    // sortData(dashboardViews: DashboardView[]): void {
    //     dashboardViews.sort((a, b) => (a.order > b.order) ? 1 : -1);
    // }

    // updateViewIndex(views: DashboardView[]): void {
    //     views.forEach((value, index) => {
    //         value.order = index + 1;
    //     });
    // }
    updateViews(userViews: UserViews): void {
        this.viewsSubject.next(userViews);
    }

    saveViews(userView: UserViews): void {
        this.viewsSubject.next(userView);
        console.log('saving views...........');
    }

    createNewHeader(): CategoryMenu {
        return new CategoryMenu(
            400,
            'New Menu',
            []
        );
    }

}
