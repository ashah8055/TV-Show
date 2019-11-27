import { Component, OnInit, OnDestroy , ViewChild} from '@angular/core';
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

  results$=new Observable<string>();
  searchTerm$ = new Subject<string>();
  searchValue:string = '';
  selectSearchTerm = new Subject<string>();
  clearValue:string ='';
  inputSearch: string;
  toggle: boolean = true;

  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
    this.inputSearch = "Search";
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

    this.searchTerm$.next(value);
    this.inputSearch = value;
    if (this.inputSearch.length > 0) {
      this.toggle = false;
    }


  }
  onSelectShow(value: string): void {
    this.selectSearchTerm.next(value);
    this.results$ = null;
  }

  clearInput() {
    this.inputSearch = null;
  }
}
