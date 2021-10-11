import { DatePipe } from '@angular/common';
import { OnInit } from '@angular/core';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { AssetListView } from 'src/app/model/asset-list-view';
import { StoreService } from 'src/app/service/store.service';
import { AssetComponent } from '../asset/asset.component';
import { AssetListDataSource } from './asset-list-datasource';

@Component({
  selector: 'app-asset-list',
  templateUrl: './asset-list.component.html',
  styleUrls: ['./asset-list.component.scss']
})
export class AssetListComponent implements OnInit,AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<AssetListView>;
  dataSource: AssetListDataSource;
  value: string = 'TEST';

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['state', 'description', 'number', 'requestedFor', 'updated'];

  constructor(
    private storeService: StoreService,
    private date: DatePipe,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.storeService.assetList().subscribe(o => {
      this.dataSource = new AssetListDataSource(o);
    })
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }

  openInformation(id: number) {
    this.dialog.open(AssetComponent, {
      width: '800px',
      data: {id: id}
    })
  }
}
