import { Component, OnInit,Input } from '@angular/core';
import { SearchService } from '../../search.service';
import { Subject, Observable, of } from 'rxjs';

@Component({
  selector: 'app-episodes-details',
  templateUrl: './episodes-details.component.html',
  styleUrls: ['./episodes-components.css']
})
export class EpisodesDetailsComponent implements OnInit {

  results: [];
  @Input() selectedSeasonShow = new Subject<string>();
 
  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
    this.searchService.search3(this.selectedSeasonShow)
      .subscribe(results => {
        console.log("Res 3", results)
        this.results = results;
      });
  }
}
