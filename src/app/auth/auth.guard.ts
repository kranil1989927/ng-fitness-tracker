import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, RouterStateSnapshot, UrlSegment } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

import * as fromRoot from '../app.reducer';

@Injectable()
export class AuthGuard implements CanActivate, CanLoad {
    
    constructor(private store: Store<fromRoot.State>) { }
    
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        return this.store.select(fromRoot.getIsAuth).pipe(take(1));
    }

    canLoad(route: Route, segments: UrlSegment[]): Observable<boolean>{
        return this.store.select(fromRoot.getIsAuth).pipe(take(1));
    }
}