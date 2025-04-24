import {CommonModule} from '@angular/common';
import {Component, Input, OnChanges, SimpleChanges, Type,} from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {MatButton} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import {MatCheckbox} from '@angular/material/checkbox';

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
  show?: boolean;
  canActivated?: boolean;
}

export interface TableConfig {
  columns: TableColumn[];
}

@Component({
  selector: 'app-global-table',
  imports: [MatTableModule, CommonModule, MatButton, MatMenuModule, MatCheckbox,],
  templateUrl: './global-table.component.html',
  styleUrl: './global-table.component.scss',
})
export class GlobalTableComponent implements OnChanges {
  columnHeaders: string[] = [];
  menuField: any[] = []
  @Input() data!: any;
  @Input() tableConfig!: TableConfig;

  ngOnChanges(changes: SimpleChanges): void {
    this.tableConfig.columns.forEach((i) => {
      this.menuField.push({...i, show: this.showProperty(i)});
      this.updateColumn()

    });
  }


  public showChange(columnId: { name: string }, isChecked: boolean): void {
    const newColumn = this.menuField.find((i) => columnId.name === i.name);
    newColumn.show = isChecked;
    this.updateColumn()
  }

  private updateColumn(): void {
    this.columnHeaders = this.menuField.filter(i => i.show).map(i => i.name);
  }


  showProperty(item: any): boolean {
    return item.hasOwnProperty('show') ? item.show : true;
  }

}
