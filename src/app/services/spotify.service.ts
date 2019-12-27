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
      'Authorization' : 'Bearer BQDDIB5cMK0GQ5-2yS6el4cUCifDwYzBk51LVlpRLEJJW7KjDkRsN7Kx-isIj85pQF2uW6CvSxl_xkwcSF8'
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

  getArtistas( termino ) {

    return this.getQuery(`search?q=${ termino }&type=artist&limit=20`)
      .pipe( map( data => {
        return data['artists'].items;
      })
    );

  }

  getArtista( id ) {

    return this.getQuery(`artists/${ id }`);

  }

}
