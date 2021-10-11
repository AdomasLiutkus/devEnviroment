import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AssetInformation } from 'src/app/model/asset-information';
import { StoreService } from 'src/app/service/store.service';
import { BaseComponent } from '../base-component';

@Component({
  selector: 'app-asset',
  templateUrl: './asset.component.html',
  styleUrls: ['./asset.component.scss']
})
export class AssetComponent extends BaseComponent implements OnInit, OnDestroy {
  information: AssetInformation = undefined;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<AssetComponent>,
    public storeService: StoreService
  ) { 
    super();
    this.subscriptionList.push(this.dialogRef.afterOpened().subscribe(o => this.getData()))
    this.subscriptionList.push(this.dialogRef.beforeClosed().subscribe(o => this.clearData()))
  }

  ngOnInit(): void {
  }

  getData() {
    this.storeService.assetInformation(this.data.id).subscribe(o => this.information = o);
  }

  clearData() {
    this.information = undefined;
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

  ngOnDestroy() {
    this.unsubscribeAll();
  }
}
