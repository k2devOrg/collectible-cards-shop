import {Component, computed, signal} from '@angular/core';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrls: ['./header.css'],
})
export class HeaderComponent {
  isMenuOpen = signal<boolean>(false);
  isMenuVisible = signal<boolean>(false);

  toggleMobileMenu() {
    if (this.isMenuOpen()) {
      this.closeMobileMenu();
    } else {
      this.openMobileMenu()
    }
  }

  openMobileMenu() {
    this.isMenuOpen.set(true);

    requestAnimationFrame(() => {
      this.isMenuVisible.set(true);
    });
  }

  closeMobileMenu() {
    this.isMenuVisible.set(false);

    setTimeout(() => {
      this.isMenuOpen.set(false);
    }, 300);
  }
}
