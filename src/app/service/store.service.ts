import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AppModule } from '../app.module';
import { AssetInformation } from '../model/asset-information';
import { AssetListView } from '../model/asset-list-view';
import { DataMockService } from './data-mock.service';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor(protected dataService: DataMockService) { }

  assetList(): Observable<AssetListView[]> {
    return of(this.dataService.assetList());
  } 

  assetInformation(id: number): Observable<AssetInformation> {
    return of(this.dataService.assetInformation(id));
  }
}
