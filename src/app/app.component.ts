import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';  // Імпортуємо RouterModule

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [RouterModule]  // Додаємо RouterModule в imports для підтримки router-outlet
})
export class AppComponent {
  title = 'untitled1';
  currentPage: string = '';

  constructor(private router: Router) {}

  // Функція для зміни сторінки
  navigateTo(page: string) {
    this.currentPage = page;
    this.router.navigate([page]);
  }
}
