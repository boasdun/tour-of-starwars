import { Injectable } from '@angular/core';
import { Character } from './character';
import { CHARACTERS } from './mock-characters';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {
  getCharacters(): Character[] {
    return CHARACTERS
  }

  constructor() { }
}
