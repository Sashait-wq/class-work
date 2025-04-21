import { CommonModule } from '@angular/common';
import {
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  Type,
} from '@angular/core';
import { MatTableModule } from '@angular/material/table';

export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  inStock: boolean;
}

interface TableColumn {
  name: string;
  label: string;
  component?: Type<any>;
}

export interface TableConfig {
  columns: TableColumn[];
}

@Component({
  selector: 'app-global-table',
  imports: [MatTableModule, CommonModule],
  templateUrl: './global-table.component.html',
  styleUrl: './global-table.component.scss',
})
export class GlobalTableComponent implements OnChanges {
  columnHeaders: string[] = [];
  @Input() data!: any;
  @Input() tableConfig!: TableConfig;

  ngOnChanges(changes: SimpleChanges): void {
    this.tableConfig.columns.forEach((i) => {
      this.columnHeaders.push(i.name);
    });
  }
}
