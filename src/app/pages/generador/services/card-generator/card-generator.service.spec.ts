import { TestBed } from '@angular/core/testing';

import { CardGeneratorService } from './card-generator.service';

describe('CardGeneratorService', () => {
  let service: CardGeneratorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardGeneratorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
