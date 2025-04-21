import {Component} from '@angular/core';
import {filterData} from './filter-mock';
import {TextFilterComponent} from './text-filter/text-filter.component';
import {SelectFilterComponent} from './select-filter/select-filter.component';
import {DataRangeFilterComponent} from './data-range-filter/data-range-filter.component';
import {RadioFilterComponent} from './radio-filter/radio-filter.component';

@Component({
  selector: 'app-filter',
  imports: [
    TextFilterComponent,
    SelectFilterComponent,
    DataRangeFilterComponent,
    RadioFilterComponent
  ],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss',
})
export class FilterComponent {

  filters = filterData;


}
