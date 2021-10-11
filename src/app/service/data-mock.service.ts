import { Injectable } from '@angular/core';
import { AppModule } from '../app.module';
import { AssetInformation } from '../model/asset-information';
import { AssetListView } from '../model/asset-list-view';

@Injectable({
  providedIn: 'root'
})
export class DataMockService {

  private description: string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tellus magna, pretium id semper ornare, hendrerit id lacus. Integer id urna vitae ante aliquet hendrerit. Nunc tempor neque et nibh fermentum, at scelerisque quam mattis.';

  private assetListDS: AssetListView[] = [
    {id: 1, state: 'Active', description: 'MS Outlook', number: 'INC000003171522', requestedFor: 'Jane Doe', updated: new Date("2021-06-17 14:12:00")},
    {id: 2, state: 'Active', description: 'Google Chrome', number: 'INC000003171523', requestedFor: 'Jane Doe', updated: new Date("2021-06-17 14:12:00")},
    {id: 3, state: 'Active', description: 'Screeenpresso', number: 'INC000003171524', requestedFor: 'Jane Doe', updated: new Date("2021-06-17 14:12:00")},
    {id: 4, state: 'Active', description: 'Adobe Premiere Pro 2020', number: 'INC000003171525', requestedFor: 'Jane Doe', updated: new Date("2021-06-17 14:12:00")},
    {id: 5, state: 'Active', description: 'Egro Pro Break Pro Excercise Program', number: 'INC000003171526', requestedFor: 'Jane Doe', updated: new Date("2021-06-17 14:12:00")},
  ]

  private assetInformationListDS: AssetInformation[] = [
    {id: 1, name: 'MS Outlook', description: this.description, img: 'outlook.png', number: 'INC000003171522', requestedFor: 'Jane Doe', opened: '1h ago', status: 'In progress', key: 'ITSW00644'},
    {id: 2, name: 'Google Chrome', description: this.description, img: 'chrome.png', number: 'INC000003171523', requestedFor: 'Jane Doe', opened: '1h ago', status: 'In progress', key: 'ITSW00644'},
    {id: 3, name: 'Screeenpresso', description: this.description, img: 'screenpresso.png', number: 'INC000003171524', requestedFor: 'Jane Doe', opened: '1h ago', status: 'In progress', key: 'ITSW00644'},
    {id: 4, name: 'Adobe Premiere Pro 2020', description: this.description, img: 'adobe.png', number: 'INC000003171525', requestedFor: 'Jane Doe', opened: '1h ago', status: 'In progress', key: 'ITSW00644'},
    {id: 5, name: 'Egro Pro Break Pro Excercise Program', description: this.description, img: 'egro.png', number: 'INC000003171526', requestedFor: 'Jane Doe', opened: '1h ago', status: 'In progress', key: 'ITSW00644'}
  ]

  constructor() { }

  assetList() : AssetListView[] {
    return this.assetListDS
  }
  assetInformation(id: number) :  AssetInformation {
    return this.assetInformationListDS.find(o => o.id == id);
  }
}
