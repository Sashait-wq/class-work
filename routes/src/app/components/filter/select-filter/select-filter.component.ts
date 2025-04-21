import { Component, Input } from '@angular/core';
import { TextFilter } from '../filter.interface.ts';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-select-filter',
  imports: [],
  templateUrl: './select-filter.component.html',
  styleUrl: './select-filter.component.scss',
})
export class SelectFilterComponent {
  @Input() config!: TextFilter;
  @Input() control!: FormControl;
}
