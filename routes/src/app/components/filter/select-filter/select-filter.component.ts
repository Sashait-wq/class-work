import {Component, Input} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {SelectFilter} from '../filter.interface';

@Component({
  selector: 'app-select-filter',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './select-filter.component.html',
  styleUrl: './select-filter.component.scss',
})
export class SelectFilterComponent {
  @Input() config!: SelectFilter;
  @Input() control!: FormControl;
}
