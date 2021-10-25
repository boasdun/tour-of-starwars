import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { Character } from './character';

import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  private charactersUrl = 'api/characters';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  }

  constructor(
    private http: HttpClient,
    private messageService: MessageService ) { }

  /* GET characters from the server */
  getCharacters(): Observable<Character[]> {
    return this.http.get<Character[]>(this.charactersUrl)
      .pipe(
        tap(_ => this.log('fetched characters')),
        catchError(this.handleError<Character[]>('getCharacters', []))
      )
  }

  /* GET character by id. Will 404 if character not found */
  getCharacter(id: number): Observable<Character> {
    const url = `${this.charactersUrl}/${id}`
    return this.http.get<Character>(url).pipe(
      tap(_ => this.log(`fetched character id=${id}`)),
      catchError(this.handleError<Character>(`getCharacter id=${id}`))
    );
  }

  /* GET characters whose name contains search term */
  searchCharacters(term: string): Observable<Character[]> {
    if (!term.trim()) {
      // if not search term, return empty character array/
      return of([]);
    }
    return this.http.get<Character[]>(`${this.charactersUrl}/?name=${term}`).pipe(
      tap(x => x.length ?
        this.log(`found characters matching "${term}"`):
        this.log(`no heroes matching "${term}"`)),
      catchError(this.handleError<Character[]>('searchHeroes', []))
    );
  }

  /* PUT: update the character on the server */
  updateCharacter(character: Character): Observable<any> {
    return this.http.put(this.charactersUrl, character, this.httpOptions).pipe(
      tap(_ => this.log(`updated character id=${character.id}`)),
      catchError(this.handleError<any>('updateCharacter'))
    );
  }

  /* POST: add a new character to the server */
  addCharacter(character: Character): Observable<Character> {
    return this.http.post<Character>(this.charactersUrl, character, this.httpOptions).pipe(
      tap((newCharacter: Character) => this.log(`added character w/ id=${newCharacter.id}`)),
      catchError(this.handleError<Character>('addCharacter'))
    )
  }

  /* DELETE: delete the character from the server */
  deleteCharacter(id: number): Observable<Character> {
    const url = `${this.charactersUrl}/${id}`;

    return this.http.delete<Character>(url, this.httpOptions).pipe(
      tap(_=> this.log(`deleted character id=${id}`)),
      catchError(this.handleError<Character>('deleteCharacter'))
    );
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
