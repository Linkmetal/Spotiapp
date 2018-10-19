import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  artists: any[] = [];
  loading: boolean;

  constructor( private spotify: SpotifyService ) { }

  searchArtist(searchTerm: string) {
    this.loading = true;
    console.log('Buscando artista ' + searchTerm);
    this.spotify.getArtist(searchTerm)
          .subscribe( (data: any) => {
            this.artists = data;
            this.loading = false;
          });
  }

}
