import { TestBed } from '@angular/core/testing';

import { UrlModifierInterceptor } from './url-modifier.interceptor';

describe('UrlModifierInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [UrlModifierInterceptor],
  }));

  it('should be created', () => {
    const interceptor: UrlModifierInterceptor = TestBed.inject(UrlModifierInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
