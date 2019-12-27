import { Component } from '@angular/core';
import { SpotifyService } from "../../services/spotify.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent {

  albumes: any [] = [];
  loading: boolean = true;

  constructor( private spotify: SpotifyService ) {
    spotify.getNewReleases()
    .subscribe( (data : any) => {
      this.albumes = data;
      this.loading = false;
      console.log(data);
    });
  }

}
