import { TestBed } from '@angular/core/testing';

import { OpeningCrawlService } from './opening-crawl.service';

describe('OpeningCrawlService', () => {
  let service: OpeningCrawlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OpeningCrawlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
