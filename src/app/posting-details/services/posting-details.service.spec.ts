import { TestBed, inject } from '@angular/core/testing';

import { PostingDetailsService } from './posting-details.service';

describe('PostingDetailsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PostingDetailsService]
    });
  });

  it('should be created', inject([PostingDetailsService], (service: PostingDetailsService) => {
    expect(service).toBeTruthy();
  }));
});
