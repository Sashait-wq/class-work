import {Component, Input} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {RadioFilter} from '../filter.interface';

@Component({
  selector: 'app-radio-filter',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './radio-filter.component.html',
  styleUrl: './radio-filter.component.scss',
})
export class RadioFilterComponent {
  @Input() config!: RadioFilter;
  @Input() control!: FormControl;
}
