import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http : HttpClient) { }

  getNewReleases() {

    const headers = new HttpHeaders({
      'Authorization' : 'Bearer BQAuCDFZ1oUxMVwsl_T8t8IpR4xy_hOrVCI2zEmtIgOjV6vZgpfWbXOatEw9oqB_pebyye-qWC9Mm9Pt6pw'
    });

    return this.http.get('https://api.spotify.com/v1/browse/new-releases?country=AR&limit=20', { headers })
      .pipe( map( data => {
        return data['albums'].items;
      })
    );

  }

  getArtista( termino ) {
    const headers = new HttpHeaders({
      'Authorization' : 'Bearer BQAuCDFZ1oUxMVwsl_T8t8IpR4xy_hOrVCI2zEmtIgOjV6vZgpfWbXOatEw9oqB_pebyye-qWC9Mm9Pt6pw'
    });

    return this.http.get(`https://api.spotify.com/v1/search?q=${ termino }&type=artist&limit=20`, { headers })
      .pipe( map( data => {
        return data['artists'].items;
      })
    );

  }
}
