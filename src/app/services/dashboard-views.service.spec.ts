import { TestBed } from '@angular/core/testing';

import { DashboardViewsService } from './dashboard-views.service';

describe('DashboardViewsService', () => {
    let service: DashboardViewsService;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(DashboardViewsService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
