import { Component, OnInit } from '@angular/core';
import { Character } from '../character';
import { CHARACTERS } from '../mock-characters';

@Component({
	selector: 'app-characters',
	templateUrl: './characters.component.html',
	styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {
	characters = CHARACTERS;

	selectedCharacter?: Character;
	onSelect(character: Character): void {
		this.selectedCharacter = character;
	}

	constructor() { }

	ngOnInit(): void {
	}

}
