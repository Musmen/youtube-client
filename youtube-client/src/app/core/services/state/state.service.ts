import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter } from 'rxjs/operators';

import SortState from '@youtube/models/sort-state.model';
import UserModel from '@core/models/user.model';
import {
  DEFAULT_USER,
  DEFAULT_USER_LOGIN_TITLE,
  DEBOUNCE_TIME_IN_MS,
  MIN_SEARCH_VALUE_LENGTH,
} from '@core/common/constants';

import { UserStorageService } from '../user-storage/user-storage.service';
import { LocationService } from '../location/location.service';

@Injectable({ providedIn: 'root' })
export class StateService {
  private _isUserLogged$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private _user: UserModel = { ...DEFAULT_USER };

  private _searchValue$: Subject<string> = new Subject<string>();
  private _isSortingPanelOpen$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  private _sortState?: SortState;
  private _filteringValue: string = '';

  constructor(
    private _userStorageService: UserStorageService,
    private _locationService: LocationService,
  ) {
    this._initUser();
  }

  private _initUser(): void {
    const user: UserModel = this.getUserStorage();
    this.setUser(user);
    this.updateUserLoginStatus();
  }

  toggleSortingPanel(): void {
    this._isSortingPanelOpen$.next(!this.getIsSortingPanelOpen());
  }
  getIsSortingPanelOpen(): boolean {
    return this._isSortingPanelOpen$.getValue();
  }
  getIsSortingPanelOpen$(): Observable<boolean> {
    return this._isSortingPanelOpen$.asObservable();
  }

  setSortState(newSortState: SortState): void {
    this._sortState = { ...newSortState };
  }
  getSortState(): SortState | undefined {
    return this._sortState;
  }

  setFilteringValue(filteringValue: string): void {
    this._filteringValue = filteringValue;
  }
  getFilteringValue(): string {
    return this._filteringValue;
  }

  setSearchValue(searchValue: string): void {
    this._searchValue$.next(searchValue);
  }
  getSearchValue$(): Observable<string> {
    return this._searchValue$.asObservable()
      .pipe(
        debounceTime(DEBOUNCE_TIME_IN_MS),
        distinctUntilChanged(),
        filter(
          (searchValue: string) => Boolean(
            searchValue.length >= MIN_SEARCH_VALUE_LENGTH,
          ),
        ),
      );
  }

  checkIsUserLogged(): boolean {
    return this._isUserLogged$.getValue();
  }
  getIsUserLogged$(): Observable<boolean> {
    return this._isUserLogged$.asObservable();
  }

  setUser(user: UserModel): void {
    this._user = { ...user };
  }
  getUser(): UserModel {
    return this._user;
  }
  getUserLogin(): UserModel['login'] {
    return this.getUser().login || DEFAULT_USER_LOGIN_TITLE;
  }
  checkIsUserToken(): boolean {
    return Boolean(this._user.token);
  }

  setUserStorage(user: UserModel): void {
    this._userStorageService.setUserStorage(user);
  }
  getUserStorage(): UserModel {
    return this._userStorageService.getUserStorage();
  }
  clearUserStorage(): void {
    this._userStorageService.clearUserStorage();
  }

  setLoginStatus(): void {
    this._isUserLogged$.next(true);
  }
  setLogoutStatus(): void {
    this._isUserLogged$.next(false);
  }
  updateUserLoginStatus(): void {
    if (this.checkIsUserToken()) this.setLoginStatus();
  }

  login(user: UserModel = this._user): void {
    this.setUserStorage(user);
    this.setUser(user);
    this.setLoginStatus();
    this._locationService.goToMainPage();
  }
  logout(): void {
    this.clearUserStorage();
    this.setUser({ ...DEFAULT_USER });
    this.setLogoutStatus();
    this._locationService.goToLoginPage();
  }
}
