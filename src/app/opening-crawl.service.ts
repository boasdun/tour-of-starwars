import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { OpeningCrawl } from './opening';

@Injectable({
  providedIn: 'root'
})
export class OpeningCrawlService {
	private openingcrawlUrl = 'api/movies';

  constructor(private http: HttpClient) {  }

	/* GET opening crawl from the server */
	getOpeningCrawls(): Observable<OpeningCrawl[]> {
		return this.http.get<OpeningCrawl[]>(this.openingcrawlUrl);
	}
}
