import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from '../../header/header/header';

@Component({
  selector: 'app-app-shell',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  templateUrl: './app-shell.html',
  styleUrls: ['./app-shell.css'],
})
export class AppShellComponent {

}
