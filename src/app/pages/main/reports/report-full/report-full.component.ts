import {
    ChangeDetectionStrategy,
    Component,
    Input,
    OnInit,
    inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportsService } from '../reports.service';
import { BehaviorSubject } from 'rxjs';
import { Report } from '../interfaces/report'; 
import { TuiLetModule } from '@taiga-ui/cdk';

@Component({
    selector: 'app-report-full',
    standalone: true,
    imports: [CommonModule, TuiLetModule],
    templateUrl: './report-full.component.html',
    styleUrl: './report-full.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReportFullComponent implements OnInit {
    @Input({ required: true }) id!: string;

    private reportsService = inject(ReportsService);

    public report$: BehaviorSubject<Report | null> = new BehaviorSubject<Report | null>(null);

    public ngOnInit(): void {
        if (!this.id) {
            return;
        }

        const foundReport = this.reportsService.getReportById(this.id);
        this.report$.next(foundReport);
    }
}
