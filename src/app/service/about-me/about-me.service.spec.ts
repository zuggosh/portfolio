import { TestBed, inject } from '@angular/core/testing';

import { AboutMeService } from './about-me.service';

describe('AboutMeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AboutMeService]
    });
  });

  it('should be created', inject([AboutMeService], (service: AboutMeService) => {
    expect(service).toBeTruthy();
  }));
});
