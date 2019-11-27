import { Component, OnInit, OnDestroy } from '@angular/core';
import { SearchService } from '../search.service';
import { Subject, Observable, of } from 'rxjs';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [],
  providers: [SearchService]
})
export class SearchComponent implements 
OnInit, OnDestroy {

  results$: Observable<string>;
  searchTerm$ = new Subject<string>();
  selectSearchTerm= new Subject<string>();
  inputSearch: string;

  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
    this.searchService.search(this.searchTerm$)
      .subscribe(results => {
        let ob = [results]
        this.results$ = results;
      });
  }

  ngOnDestroy(): void {
    this.searchTerm$.unsubscribe();
  }

  onSearchChange(value: string): void {
    this.searchTerm$.next(value)
    console.log("CLICKED", value);
    
  }
  onSelectShow(value: string): void{
    this.selectSearchTerm.next(value);
  }
}
