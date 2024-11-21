import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isFixed: boolean = false;
  isDropDownVisible: boolean = false;
  @HostListener('window:scroll', []) onWindowScroll(): void { this.isFixed = window.scrollY > 60 ? true : false; }
}
