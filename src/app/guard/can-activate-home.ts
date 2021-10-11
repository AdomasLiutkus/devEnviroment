import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable()
export class CanActivateHome implements CanActivate {
  name$: Observable<string>;

  constructor(
    private store: Store<{ user: string }>,
    protected router: Router
  ) {
    this.name$ = this.store.select('user');
  }

  canActivate(): Observable<boolean> {
    return this.name$.pipe(
      map((user) => user.length !== 0),
      tap((isUserEntered) => {
        if (!isUserEntered) this.router.navigate(['intro']);
      })
    );
  }
}
