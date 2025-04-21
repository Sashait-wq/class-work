import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { SideBarComponent } from '../side-bar/side-bar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-wrap',
  imports: [
    ReactiveFormsModule,
    SideBarComponent,
    HeaderComponent,
    NgClass,
    RouterOutlet,
  ],
  templateUrl: './wrap.component.html',
  styleUrl: './wrap.component.scss',
})
export class WrapComponent {
  isSidebarCollapsed = false;

  onSidebarToggle() {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
  }
}
