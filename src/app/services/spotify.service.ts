import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http : HttpClient) { }

  getQuery( query : string) {
    const url = `https://api.spotify.com/v1/${ query }`;
    const headers = new HttpHeaders({
      'Authorization' : 'Bearer BQClAUTFhK5sKX63cEwZvrOBHO9KTOqUGBqFWaQVlmB2xm0WgLEf95u4k2nChoxoIHnDe96YhyQHowhUDF0'
    });

    return this.http.get( url, { headers });
  }

  getNewReleases() {

    return this.getQuery('browse/new-releases?country=AR&limit=20')
      .pipe( map( data => {
        return data['albums'].items;
      })
    );

  }

  getArtista( termino ) {

    return this.getQuery(`search?q=${ termino }&type=artist&limit=20`)
      .pipe( map( data => {
        return data['artists'].items;
      })
    );

  }
}
