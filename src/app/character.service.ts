import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Character } from './character';
import { CHARACTERS } from './mock-characters';

import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  private charactersUrl = 'api/characters';

  constructor(
    private http: HttpClient,
    private messageService: MessageService ) { }

  /* Get characters from the server */
  getCharacters(): Observable<Character[]> {
    return this.http.get<Character[]>(this.charactersUrl)
      .pipe(
        catchError(this.handleError<Character[]>('getCharacters', []))
      )
  }

  getCharacter(id: number): Observable<Character> {
    const character = CHARACTERS.find( h => h.id === id)!;
    this.messageService.add(`CharacterService: fetched character id=${id}`);
    return of (character);
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a CharacterService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`CharacterService: ${message}`);
  }
}

// this.messageService.add('CharacterService: fetched characters')
