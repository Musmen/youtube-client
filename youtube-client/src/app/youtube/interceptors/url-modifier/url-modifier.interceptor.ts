import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { Observable } from 'rxjs';

import { YOUTUBE_API_URL } from '@youtube/common/constants';

const YOUTUBE_API_TOKEN: string = 'AIzaSyAI-D1P0OH_z7m5_RzSiQgWz22lmXZ8ZAw';

@Injectable()
export class UrlModifierInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const fullRequest = request.clone({
      url: `${YOUTUBE_API_URL.BASE}${request.url}&key=${YOUTUBE_API_TOKEN}`,
    });

    return next.handle(fullRequest);
  }
}

export const URL_MODIFIER_INTERCEPTOR_PROVIDE_TOKEN = {
  provide: HTTP_INTERCEPTORS,
  useClass: UrlModifierInterceptor,
  multi: true,
};
