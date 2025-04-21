export type FilterType = 'text' | 'select' | 'radio' | 'dateRange';

export interface BaseFilter {
  type: string;
  label: string;
  key: string;
}

export interface TextFilter extends BaseFilter {
  type: 'text';
  placeholder?: string;
}

export interface SelectFilter extends BaseFilter {
  type: 'select';
  options: optionsFilter[];
}

export interface RadioFilter extends BaseFilter {
  type: 'text';
  options: optionsFilter[];
}

export interface DateRangeFilter extends BaseFilter {
  type: 'text';
  fromLabel?: string;
  toLabel?: string;
}

interface optionsFilter {
  label: string;
  value: string;
}

export type InterfaceTypes =
  | TextFilter
  | SelectFilter
  | RadioFilter
  | DateRangeFilter;

export interface FilterSchema {
  filters: InterfaceTypes[];
}
