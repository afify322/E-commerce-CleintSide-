import { TestBed } from '@angular/core/testing';

import { ProductsHttpClientService } from './products-http-client.service';

describe('ProductsHttpClientService', () => {
  let service: ProductsHttpClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductsHttpClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
