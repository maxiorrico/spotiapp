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
  hasError: boolean = false;
  mensajeError: string = '';

  constructor( private spotify: SpotifyService ) {
    this.loading = true;

    spotify.getNewReleases()
    .subscribe( (data : any) => {
      this.albumes = data;
      this.loading = false;
      this.hasError = false;
      console.log(data);
    }, (responseError => {
      this.loading = false;
      this.hasError = true;
      this.mensajeError = responseError.error.error.message;
    }));
  }

}
