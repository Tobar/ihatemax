/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AurhService } from './Aurh.service';

describe('Service: Aurh', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AurhService]
    });
  });

  it('should ...', inject([AurhService], (service: AurhService) => {
    expect(service).toBeTruthy();
  }));
});
