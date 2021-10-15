import { Injectable } from '@angular/core';
import { Character } from './character';
import { CHARACTERS } from './mock-characters';

import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  getCharacters(): Observable<Character[]> {
    const characters = of(CHARACTERS);
    return characters;
  }

  constructor() { }
}
