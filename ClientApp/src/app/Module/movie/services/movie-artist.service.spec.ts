import { TestBed } from '@angular/core/testing';

import { MovieArtistService } from './movie-artist.service';

describe('MovieArtistService', () => {
  let service: MovieArtistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovieArtistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
