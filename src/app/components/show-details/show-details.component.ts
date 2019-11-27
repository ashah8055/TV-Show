import { Component, OnInit, Input } from '@angular/core';
import { SearchService } from '../../search.service';
import { Subject, Observable, of } from 'rxjs';

@Component({
  selector: 'app-show-details',
  templateUrl: './show-details.component.html',
  styles: []
})
export class ShowDetailsComponent implements OnInit {

  results: [];
  @Input() selectedShow = new Subject<string>();
  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
    this.searchService.search1(this.selectedShow)
      .subscribe(results => {
        console.log("Res ", results)
        this.results = results;
      });

  }

}
