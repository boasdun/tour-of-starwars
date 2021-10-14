import { Component, OnInit } from '@angular/core';
import { Character } from '../character';
import { CharactersService } from '../character.service';

@Component({
	selector: 'app-characters',
	templateUrl: './characters.component.html',
	styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {
	characters: Character[] = [];

	selectedCharacter?: Character;
	onSelect(character: Character): void {
		this.selectedCharacter = character;
	}

  getCharacters(): void {
    this.characters = this.characterService.getCharacters();
  }

	constructor(private characterService: CharactersService) { }

	ngOnInit(): void {
    this.getCharacters();
	}

}
