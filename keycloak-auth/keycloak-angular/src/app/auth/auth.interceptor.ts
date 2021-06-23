import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';

import { Observable } from 'rxjs';

import {fromPromise} from "rxjs/internal-compatibility";
import { mergeMap } from 'rxjs/operators';

@Injectable()

export class AuthInterceptor implements HttpInterceptor {
  constructor(private keyclockService:KeycloakService){}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return fromPromise(this.keyclockService.getToken())
            .pipe(
                mergeMap(idToken => {
                    if (idToken) {
                        const cloned =req.clone({
                            headers: req.headers.set("Authorization", "Bearer " + idToken)
                        });

                        return next.handle(cloned);
                    } else {
                        return next.handle(req);
                    }
                })
            );
  }
}