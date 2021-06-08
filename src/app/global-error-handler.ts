import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { LoggingService } from './services/logging.service';
import { ErrorService } from './services/error.service';
import { NotificationService } from './services/notification.service';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {

    constructor(private injector: Injector) { }

    // tslint:disable-next-line: typedef
    handleError(error: Error | HttpErrorResponse) {
        const errorService = this.injector.get(ErrorService);
        const logger = this.injector.get(LoggingService);
        const notifier = this.injector.get(NotificationService);

        let message;
        // tslint:disable-next-line: prefer-const
        let stackTrace: string;
        if (error instanceof HttpErrorResponse) {
            message = errorService.getServerErrorMessage(error);
            notifier.showError(message);
        } else {
            message = errorService.getClientErrorMessage(error);
            notifier.showError(message);
        }
        logger.logError(message, stackTrace);
        console.error(error);
    }
}
