import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {

  shareData:any = new Subject();

  constructor() {
    this.shareData.asObservable();
   }


}
