import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css'],
  standalone: true  // Вказуємо, що компонент є standalone
})
export class ReportsComponent {
  reportDetails = {
    title: 'Звіт про відправлення',
    data: ['Відправлення 1', 'Відправлення 2', 'Відправлення 3']
  };

  constructor() {}
}
