import { TestBed } from '@angular/core/testing';

import { PersonaProviderService } from './persona-provider.service';

describe('PersonaProviderService', () => {
  let service: PersonaProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonaProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
