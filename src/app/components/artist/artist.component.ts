import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {

  id: string;
  artist: any;
  loading: boolean;
  tracks: any[];

  constructor(private router: ActivatedRoute, private spotify: SpotifyService) {
    this.loading = true;
    this.router.params.subscribe(params => {
      console.log(params['id']);
      this.id = params['id'];
      this.getArtistData(this.id);
    });

  }

  ngOnInit() {

  }

  getArtistData(id: string) {
    this.spotify.getArtistById(id)
      .subscribe(artist => {
        console.log(artist);
        this.artist = artist;
        this.loading = false;
      });
    this.spotify.getTopTracks(id)
      .subscribe((tracks: any[]) => {
        console.log(tracks);
        this.tracks = tracks;
      });
  }
}
