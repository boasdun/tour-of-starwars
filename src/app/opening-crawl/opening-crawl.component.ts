import { Component, OnInit } from '@angular/core';

import { OpeningCrawl } from '../opening';
import { OpeningCrawlService } from '../opening-crawl.service';

@Component({
  selector: 'app-opening-crawl',
  templateUrl: './opening-crawl.component.html',
  styleUrls: ['./opening-crawl.component.scss']
})
export class OpeningCrawlComponent implements OnInit {
	openingcrawls: OpeningCrawl[] = [];

  constructor(private openingcrawlService: OpeningCrawlService) { }

  ngOnInit(): void {
		this.getOpeningCrawls();
	}

	getOpeningCrawls(): void {
    this.openingcrawlService.getOpeningCrawls()
      .subscribe(openingcrawls => this.openingcrawls = openingcrawls);
  }
}
