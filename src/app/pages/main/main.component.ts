import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MainHeaderComponent } from "./main-header/main-header.component";

@Component({
    selector: 'app-main',
    standalone: true,
    templateUrl: './main.component.html',
    styleUrl: './main.component.scss',
    imports: [CommonModule, RouterOutlet, RouterLink, MainHeaderComponent]
})
export class MainComponent {}
