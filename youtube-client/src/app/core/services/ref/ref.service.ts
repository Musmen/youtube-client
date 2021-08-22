import { isPlatformBrowser } from '@angular/common';
import {
  Injectable,
  Inject,
  PLATFORM_ID,
  InjectionToken,
} from '@angular/core';

import { MyLocalStorage } from '@app/core/services/ref/simulators/my-local-storage';

const myLocalStorage = new MyLocalStorage();

@Injectable({ providedIn: 'root' })
export class RefService {
  private _localStorageRef: Storage;

  constructor(
    @Inject(PLATFORM_ID) private platformId: InjectionToken<Object>,
  ) {
    this._localStorageRef = isPlatformBrowser(platformId)
      ? localStorage
      : myLocalStorage;
  }

  get localStorage(): Storage {
    return this._localStorageRef;
  }
}
