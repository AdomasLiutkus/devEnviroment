import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AppModule } from '../app.module';
import { DataMockService } from './data-mock.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(protected dataService: DataMockService) { }

}
