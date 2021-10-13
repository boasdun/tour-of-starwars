import { Component, OnInit } from '@angular/core';
import { Character } from '../character';

@Component({
	selector: 'app-characters',
	templateUrl: './characters.component.html',
	styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {
	character: Character = {
		id: 1,
		name: 'Luke Skywalker',
		mass: 77,
		hair_color: "blond",
		skin_color: "fair",
		eye_color: "blue",
		birth_year: "19BBY",
		gender: "male"
	}

	constructor() { }

	ngOnInit(): void {
	}

}
