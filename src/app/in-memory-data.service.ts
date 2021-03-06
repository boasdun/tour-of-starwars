import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Character } from './character';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const characters = [
      {
        id: 1,
        name: 'Luke Skywalker',
        height: 172,
        mass: 77,
        hair_color: "blond",
        skin_color: "fair",
        eye_color: "blue",
        birth_year: "19BBY",
        gender: "male"
      },
      {
        id: 2,
        name: 'C-3PO',
        height: 167,
        mass: 75,
        hair_color: "n/a",
        skin_color: "gold",
        eye_color: "yellow",
        birth_year: "112BBY",
        gender: "n/a"
      },
      {
        id: 3,
        name: 'R2-D2',
        height: 96,
        mass: 32,
        hair_color: "n/a",
        skin_color: "white, blue",
        eye_color: "red",
        birth_year: "33BBY",
        gender: "n/a"
      },
      {
        id: 4,
        name: 'Darth Vader',
        height: 202,
        mass: 136,
        hair_color: "none",
        skin_color: "white",
        eye_color: "yellow",
        birth_year: "41.9BBY",
        gender: "male"
      },
      {
        id: 5,
        name: 'Leia Organa',
        height: 150,
        mass: 49,
        hair_color: "brown",
        skin_color: "light",
        eye_color: "brown",
        birth_year: "19BBY",
        gender: "female"
      },
      {
        id: 6,
        name: 'Owen Lars',
        height: 178,
        mass: 120,
        hair_color: "brown, grey",
        skin_color: "light",
        eye_color: "blue",
        birth_year: "52BBY",
        gender: "male"
      },
      {
        id: 7,
        name: 'Beru Whitesun Lars',
        height: 165,
        mass: 75,
        hair_color: "brown",
        skin_color: "light",
        eye_color: "blue",
        birth_year: "47BBY",
        gender: "female"
      },
      {
        id: 8,
        name: 'R5-D4',
        height: 97,
        mass: 32,
        hair_color: "n/a",
        skin_color: "white, red",
        eye_color: "red",
        birth_year: "unknown",
        gender: "n/a"
      },
      {
        id: 9,
        name: 'Biggs Darklighter',
        height: 183,
        mass: 84,
        hair_color: "black",
        skin_color: "light",
        eye_color: "brown",
        birth_year: "24BBY",
        gender: "male"
      },
      {
        id: 10,
        name: 'Obi-Wan Kenobi',
        height: 182,
        mass: 77,
        hair_color: "auburn, white",
        skin_color: "fair",
        eye_color: "blue-gray",
        birth_year: "57BBY",
        gender: "male"
      }
    ];
		const movies = [
			{
				movie: 'Episode IX The Rise of Skywalker',
				copy: 'The dead speak! The galaxy has heard a mysterious broadcast, a threat of REVENGE in the sinister voice of the late EMPEROR PALPATINE.\nGENERAL LEIA ORGANA dispatches secret agents to gather intelligence, while REY, the last hope of the Jedi, trains for battle against the diabolical FIRST ORDER.\n Meanwhile, Supreme Leader KYLO REN rages in search of the phantom Emperor, determined to destroy any threat to his power???'
			}
		];
    return {characters, movies};
  }

  // Override de onderstaande genId method die er voor zorgt dat character altijd een id heeft.
  // Als de character array leeg is,
  // returnt onderstaande method het initi??le nummer (11).
  // Als de character array niet leeg is, returnt de onderstaande method de hoogste
  // character id + 1.
  genId(characters: Character[]): number {
    return characters.length > 0 ? Math.max(...characters.map(character => character.id)) + 1 : 11;
  }
}
