import { Component, OnInit,Input } from '@angular/core';
import { SearchService } from '../../search.service';
import { Subject, Observable, of } from 'rxjs';




@Component({
  selector: 'app-season-details',
  templateUrl: './season-details.component.html',
  styles: []
})
export class SeasonDetailsComponent implements OnInit {

 
  results: [];
  @Input() selectedShow = new Subject<string>();
  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
    this.searchService.search2(this.selectedShow)
      .subscribe(results => {
        console.log("Res 2", results)
        this.results = results;
      });
  }


}
