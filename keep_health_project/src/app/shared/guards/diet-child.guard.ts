import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivateChild, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DietChildGuard implements CanActivateChild {

  constructor(private router: Router) { }

  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    const id = next.paramMap.get('id');

    if (isLoggedIn && !isNaN(Number(id))) {
      return true;
    } else {
      this.router.navigate(['/diet']);
      return false;
    }
  }
}
