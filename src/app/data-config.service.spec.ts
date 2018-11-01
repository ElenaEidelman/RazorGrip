import { TestBed, inject } from '@angular/core/testing';

import { DataConfigService } from './data-config.service';

describe('DataConfigService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataConfigService]
    });
  });

  it('should be created', inject([DataConfigService], (service: DataConfigService) => {
    expect(service).toBeTruthy();
  }));
});
