import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { YoutubeService } from '@app/youtube/services/youtube/youtube.service';
import SearchResultsItem from '@youtube/models/search-results-item.model';

@Component({
  selector: 'app-info-page',
  templateUrl: './info-page.component.html',
  styleUrls: ['./info-page.component.scss'],
})
export class InfoPageComponent implements OnInit {
  infoCard?: SearchResultsItem;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _youtubeService: YoutubeService,
    private _location: Location,
  ) { }

  ngOnInit(): void {
    const { id } = this._activatedRoute.snapshot.params;
    this.infoCard = this._youtubeService.getSearchResultsItemById(id);
  }

  goBack(): void {
    this._location.back();
  }
}
