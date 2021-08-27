import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class LocationService {
  constructor(private _router: Router) { }

  goToMainPage(): void {
    this._router.navigate(['/main']);
  }

  goToAdminPage(): void {
    this._router.navigate(['/admin']);
  }

  goToLoginPage(): void {
    this._router.navigate(['/login']);
  }
}
