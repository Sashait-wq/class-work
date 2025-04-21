import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TextFilter } from '../filter.interface';

@Component({
  selector: 'app-radio-filter',
  imports: [],
  templateUrl: './radio-filter.component.html',
  styleUrl: './radio-filter.component.scss',
})
export class RadioFilterComponent {
  @Input() config!: TextFilter;
  @Input() control!: FormControl;
}
