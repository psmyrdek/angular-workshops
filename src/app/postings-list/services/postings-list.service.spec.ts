import { TestBed, inject } from '@angular/core/testing';

import { PostingsListService } from './postings-list.service';

describe('PostingsListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PostingsListService]
    });
  });

  it('should be created', inject([PostingsListService], (service: PostingsListService) => {
    expect(service).toBeTruthy();
  }));
});
