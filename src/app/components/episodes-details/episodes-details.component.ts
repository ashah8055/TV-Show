import { Component, OnInit, Input } from '@angular/core';
import { SearchService } from '../../search.service';
import { Subject, Observable, of } from 'rxjs';


@Component({
  selector: 'app-episodes-details',
  templateUrl: './episodes-details.component.html',
  styleUrls: ['./episodes-components.css']
})
export class EpisodesDetailsComponent implements OnInit {

  results: [];
  showEpisodeInfo: boolean = false;
  @Input() selectedSeasonShow = new Subject<string>();
  selectedEpisode = new Subject<string>();
  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
    this.searchService.search3(this.selectedSeasonShow)
      .subscribe(results => {
        this.showEpisodeInfo = true
        this.results = results;
      });
  }

  episodeInfo(value: string): void {
    this.selectedEpisode.next(value);
  }
}
