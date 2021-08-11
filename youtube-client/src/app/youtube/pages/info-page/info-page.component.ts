import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { YoutubeService } from '@app/youtube/services/youtube/youtube.service';
import SearchResultsItem from '@youtube/models/search-results-item.model';

@Component({
  selector: 'app-info-page',
  templateUrl: './info-page.component.html',
  styleUrls: ['./info-page.component.scss'],
})
export class InfoPageComponent {
  infoCard?: SearchResultsItem;

  constructor(private _activatedRoute: ActivatedRoute, private _youtubeService: YoutubeService) {
    const { id } = _activatedRoute.snapshot.params;
    this.infoCard = _youtubeService.getSearchResultsItemById(id);
  }
}
