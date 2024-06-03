import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Report } from './interfaces/report'; 
import { ReportCreation } from './interfaces/report-creation';
import { TuiAlertService } from '@taiga-ui/core';
import { nanoid } from 'nanoid'

@Injectable({ providedIn: 'root' })
export class ReportsService {
    private readonly tuiAlertService$ = inject(TuiAlertService);

    private readonly allReports$: BehaviorSubject<Report[]> = new BehaviorSubject<Report[]>([]);

    public getAllReports$(): Observable<Report[]> {
        return this.allReports$.asObservable();
    }

    public getReportById(id: string): Report | null {
        return this.allReports$.value.find((report: Report) => report.id === id) ?? null;
    }

    public createReport({title}: ReportCreation): void {
        console.log('CREATE_REPORT_WITH_TITLE', title);

        this.allReports$.next([...this.allReports$.value, {id: nanoid(), title}]);

        this.tuiAlertService$.open(`Отчёт "${title} успешно создан!"`, { status: 'success' }).subscribe();
    }
}
