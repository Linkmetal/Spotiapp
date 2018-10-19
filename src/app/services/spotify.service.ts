import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('Service ready!');
  }

  getQuery(query: string) {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBoo4kB_iyI4m_S_LJlDXjBPh_TxRYETML8rSZuN2ogVIUjpG1afhGW_pKqX6pdwqTgf0A3-0VTlTrvm0Y',
    });
    const url = `https://api.spotify.com/v1/${query}`;

    return this.http.get(url, { headers });
  }

  getNewReleases() {
    return this.getQuery('browse/new-releases?limit=20')
      .pipe(map(data => {
        return data['albums'].items;
      }));
  }

  getArtist(searchTerm: string) {
    return this.getQuery(`search?q=${searchTerm}&type=artist&limit=15&offset=0`)
      .pipe(map(data => {
        return data['artists'].items;
      }));
  }

  getArtistById( id: string ) {
    return this.getQuery(`artists/${id}`);
  }

  getTopTracks( id: string) {
    return this.getQuery(`artists/${id}/top-tracks?country=ES`)
        .pipe(map(data => {
          return data['tracks'];
        }));
  }

}
