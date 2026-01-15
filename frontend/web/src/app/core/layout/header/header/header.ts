import {Component, inject, signal} from '@angular/core';
import {RouterLink} from '@angular/router';
import {AuthService} from '../../../auth/authService';

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

  authService: AuthService = inject(AuthService);
  isLoggedIn = this.authService.isLoggedIn

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
