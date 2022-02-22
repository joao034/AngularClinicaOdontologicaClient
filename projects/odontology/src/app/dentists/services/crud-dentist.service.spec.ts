import { TestBed } from '@angular/core/testing';

import { CrudDentistService } from './crud-dentist.service';

describe('CrudDentistService', () => {
  let service: CrudDentistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrudDentistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
