import { Component, OnInit } from '@angular/core';

import { OpeningCrawl } from '../opening';

@Component({
  selector: 'app-opening-crawl',
  templateUrl: './opening-crawl.component.html',
  styleUrls: ['./opening-crawl.component.scss']
})
export class OpeningCrawlComponent implements OnInit {
  constructor() { }

	openingcrawls:OpeningCrawl = {
			movie: 'Episode IX The Rise of Skywalker',
			copy: 'The dead speak! The galaxy has heard a mysterious broadcast, a threat of REVENGE in the sinister voice of the late EMPEROR PALPATINE.\nGENERAL LEIA ORGANA dispatches secret agents to gather intelligence, while REY, the last hope of the Jedi, trains for battle against the diabolical FIRST ORDER.\n Meanwhile, Supreme Leader KYLO REN rages in search of the phantom Emperor, determined to destroy any threat to his power…'
		}

  ngOnInit(): void {}
}
