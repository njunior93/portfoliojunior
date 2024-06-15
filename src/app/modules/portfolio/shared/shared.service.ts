import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  private dataSubject = new BehaviorSubject<boolean>(false);
  currentData = this.dataSubject.asObservable();

  constructor() {}

  changeData(data: boolean) {
    this.dataSubject.next(data);
  }
}
