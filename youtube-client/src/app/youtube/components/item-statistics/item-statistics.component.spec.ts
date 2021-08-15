import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchResultsItemStatisticsComponent } from './item-statistics.component';

describe('SearchResultsItemStatisticsComponent', () => {
  let component: SearchResultsItemStatisticsComponent;
  let fixture: ComponentFixture<SearchResultsItemStatisticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchResultsItemStatisticsComponent],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchResultsItemStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
