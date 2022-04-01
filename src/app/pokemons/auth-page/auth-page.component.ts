import {Component, OnInit, ViewChild} from '@angular/core';
import {PokemonService} from "../pokemon.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.scss']
})
export class AuthPageComponent implements OnInit {

  hide:boolean = true;
  badCredentials:boolean = false;

  constructor(private pokemonService: PokemonService, private route: Router) { }

  ngOnInit(): void {
    if(localStorage.getItem("access_token")) {
      this.route.navigate(['/pokedex/']);
    }
  }

  login(loginField:string, passwordField:string) : void {
    console.log(loginField + "," + passwordField);
    this.pokemonService.auth(loginField, passwordField).subscribe(tokenData => {
      console.log(tokenData);
      if(tokenData.status === 201) {
        localStorage.setItem("access_token", tokenData.body.access_token);
        localStorage.setItem("refresh_token", tokenData.body.refresh_token);
        this.route.navigate(['/pokedex/']);
      }
    }, (Error) => {console.log(Error); this.badCredentials = true;});


  }

}
