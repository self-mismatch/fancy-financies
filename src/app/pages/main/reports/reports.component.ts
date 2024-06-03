import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportsService } from './reports.service';
import { Observable, map } from 'rxjs';
import { Report } from './interfaces/report';
import { TuiAutoFocusModule, TuiLetModule } from '@taiga-ui/cdk';
import { TuiButtonModule } from '@taiga-ui/core';
import {
    FormControl,
    FormGroup,
    FormsModule,
    ReactiveFormsModule,
    Validators,
} from '@angular/forms';
import { TuiInputModule } from '@taiga-ui/kit';
import { ReportCardComponent } from './report-card/report-card.component';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
    selector: 'app-reports',
    standalone: true,
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        TuiLetModule,
        TuiButtonModule,
        TuiInputModule,
        TuiAutoFocusModule,
        ReportCardComponent,
    ],
    templateUrl: './reports.component.html',
    styleUrl: './reports.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReportsComponent {
    private readonly activatedRoute = inject(ActivatedRoute);
    private readonly reportsService = inject(ReportsService);
    private readonly router = inject(Router);

    public allReports$: Observable<Report[] | null> = this.reportsService
        .getAllReports$()
        .pipe(map((allReports) => (allReports.length ? allReports : null)));

    public creatingReportForm = new FormGroup({
        title: new FormControl('', {
            validators: Validators.required,
            nonNullable: true,
        }),
    });
    public isCreatingReport = false;

    public showCreatingReportForm(): void {
        this.isCreatingReport = true;
    }

    public cancelCreatingReportForm(): void {
        this.creatingReportForm.reset();
        this.isCreatingReport = false;
    }

    public createReport(): void {
        const { title } = this.creatingReportForm.value;

        if (!title) {
            return;
        }
        
        this.reportsService.createReport({title});
        this.cancelCreatingReportForm();
    }

    // public openReport(reportId: string): void {
    //     this.router.navigate([`./:${reportId}`, { onSameUrlNavigation: true }]);
    // }
}
