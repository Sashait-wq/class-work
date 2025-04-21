import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink } from '@angular/router';

interface MenuItem {
  label: string;
  children?: MenuItem[];
  isOpen?: boolean;
  link: string[];
}

@Component({
  selector: 'app-side-bar',
  imports: [NgFor, NgIf, NgClass, RouterLink],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.scss',
})
export class SideBarComponent {
  @Input() isSidebarCollapsed = false;
  @Output() sidebarToggle = new EventEmitter<void>();

  menuItems: MenuItem[] = [
    {
      label: 'Shop1',
      link: ['allShop', 'shop-1'],
    },
    {
      label: 'Shop2',
      link: ['allShop', 'shop-2'],
    },
    {
      label: 'Shop',
      link: ['allShop'],
    },
  ];

  toggleSidebar() {
    this.sidebarToggle.emit();
  }

  toggleMenuItem(item: MenuItem) {
    // Only toggle if sidebar is not collapsed and item has children
    if (!this.isSidebarCollapsed && item.children) {
      item.isOpen = !item.isOpen;
    }
  }
}
