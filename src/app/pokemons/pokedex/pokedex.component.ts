import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss']
})
export class PokedexComponent implements OnInit {

  pokemonId: number = 0;

  constructor(private route: Router) { }

  ngOnInit(): void {
    if(!localStorage.getItem("access_token")) {
      this.route.navigate(['/login']);
    }
  }

  pokemonSelection(pokemonId : number) {
    this.pokemonId = pokemonId;
  }
}
