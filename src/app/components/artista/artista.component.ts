import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: []
})
export class ArtistaComponent {

  artista : any = {};
  loading : boolean = true;
  constructor( private router : ActivatedRoute, private spotify : SpotifyService ) {

    this.router.params.subscribe( param => {
      console.log(param);
      this.getArtista( param['id'] );
    })
  }

  getArtista( id : string) {
    this.loading = true;

    this.spotify.getArtista( id )
      .subscribe( (data : any) => {
        console.log(data);
        this.loading = false;
        this.artista = data;
      });

  }



}
