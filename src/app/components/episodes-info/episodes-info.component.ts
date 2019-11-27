import { Component, OnInit, Input } from '@angular/core';
import { SearchService } from '../../search.service';
import { Subject, Observable, of } from 'rxjs';

@Component({
  selector: 'app-episodes-info',
  templateUrl: './episodes-info.component.html',
  styles: []
})
export class EpisodesInfoComponent implements OnInit {

  results: [];
  showEpisodeInfoPerSeason: boolean = false
  @Input() episodeInformation = new Subject<string>();
  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
    this.searchService.search4(this.episodeInformation)
      .subscribe(results => { 
        this.results = results;
        this.showEpisodeInfoPerSeason = true
      });
  }

}
