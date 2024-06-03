import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-report-card',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './report-card.component.html',
    styleUrl: './report-card.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReportCardComponent {
    @Input({ required: true }) title!: string;
}
