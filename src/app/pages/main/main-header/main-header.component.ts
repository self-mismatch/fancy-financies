import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-main-header',
    standalone: true,
    imports: [CommonModule, RouterModule],
    templateUrl: './main-header.component.html',
    styleUrl: './main-header.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainHeaderComponent {}
