import { TestBed } from '@angular/core/testing';

import { RecipteService } from './recipte.service';

describe('RecipteService', () => {
  let service: RecipteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecipteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
