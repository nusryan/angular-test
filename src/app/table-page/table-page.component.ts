import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { EXAMPLE } from '../example';

const ExampleData: any[] = EXAMPLE;

@Component({
  selector: 'app-table-page',
  templateUrl: './table-page.component.html',
  styleUrls: ['./table-page.component.scss']
})
export class TablePageComponent implements AfterViewInit {
  // @ts-ignore
  @ViewChild(MatSort) sort: MatSort;

  displayedColumns: string[] = ['id', 'content'];
  dataSource = new MatTableDataSource(ExampleData);

  ngAfterViewInit() {
    this.dataSource.filterPredicate = (data, filter: string)  => {
      const dataStr = JSON.stringify(data).toLowerCase();
      return dataStr.indexOf(filter.toLocaleLowerCase()) != -1;
    };

    this.dataSource.sortingDataAccessor = (data, key) => {
      switch(key) {
        case 'content': return data.attributes.content;
        default: return data[key];
      }
    };
    this.dataSource.sort = this.sort;
  }

  onFilter = (eventTarget: any) => {
    const value = eventTarget.value;
    this.dataSource.filter = value;
  }
}
