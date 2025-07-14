import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  currentLang: 'EN' | 'DE' = 'EN';

  switchLanguage(lang: 'EN' | 'DE') {
    this.currentLang = lang;
    // Hier kannst du später z. B. einen Translate-Service aufrufen
  }
}
