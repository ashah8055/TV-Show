import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap, map, share, mergeMap } from 'rxjs/operators';

@Injectable()
export class SearchService {
  baseUrl: string = 'http://api.tvmaze.com'

  constructor(private http: HttpClient) { }

  search(terms$: Observable<string>): Observable<any> {
    return terms$.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      switchMap(term =>
        this.searchEntries(term)),
    );

  }
  search1(terms$: Observable<string>): Observable<any> {
    return terms$.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      switchMap(term =>
        this.searchService(term)),
    );

  }

  search2(terms$: Observable<string>): Observable<any> {
    return terms$.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      switchMap(term =>
        this.seasonService(term)),
    );

  }

  searchEntries(term): Observable<any> {

    let responseOutput = this.http.get(`${this.baseUrl}${`/search/shows?q=`}${term}`)
    return responseOutput;
  }
  searchService(term): Observable<any>{
    console.log("Callled", `${this.baseUrl}${`/shows/`}${term}`)
    let responseOutput = this.http.get(`${this.baseUrl}${`/shows/`}${term}`)
    return responseOutput; 
  }
  seasonService(term): Observable<any>{
    console.log("Callled Season", `${this.baseUrl}${`/shows/`}${term}`)
    let responseOutput = this.http.get(`${this.baseUrl}${`/shows/`}${term}${`/seasons`}`)
    return responseOutput;
  }
  
}
