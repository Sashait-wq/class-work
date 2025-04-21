import { Component, Input } from '@angular/core';
import { TextFilter } from '../filter.interface.ts';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-text-filter',
  imports: [ReactiveFormsModule],
  templateUrl: './text-filter.component.html',
  styleUrl: './text-filter.component.scss',
})
export class TextFilterComponent {
  @Input() config!: TextFilter;
  @Input() control!: FormControl;
}
