import {Component, Input} from '@angular/core';
import {DateRangeFilter} from '../filter.interface';
import {FormGroup, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-data-range-filter',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './data-range-filter.component.html',
  styleUrl: './data-range-filter.component.scss'
})
export class DataRangeFilterComponent {
  @Input() config!: DateRangeFilter;
  @Input() control!: FormGroup;
}
