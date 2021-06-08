import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';

const routes: Routes = [{
    path: 'dashboard/:id',
    component: DashboardComponent
}, {
    path: 'sidenav/:id/:viewId',
    component: SideNavComponent
}];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
