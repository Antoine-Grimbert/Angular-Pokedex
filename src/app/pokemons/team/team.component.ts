import { Component, OnInit } from '@angular/core';
import {Pokemon} from "../pokemon";
import {PokemonService} from "../pokemon.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

  pokemons: Pokemon[] = [];

  constructor(private pokemonService: PokemonService, private aRoute: ActivatedRoute, private route:Router) { }

  ngOnInit(): void {
    this.getPokemons();
  }

  getPokemons(): void {
    this.pokemons = [];
    this.pokemonService.getTeam().subscribe((myResult: Array<number>) => {
      console.log(myResult)
      for(const pokemonId of myResult.values()) {
        console.log(pokemonId);
        this.pokemonService.getPokemon(Number(pokemonId)).subscribe(pokemon => {if(pokemon) this.pokemons?.push(pokemon)});
      }
      console.log(this.pokemons);
    });
  }

  logout(): void {
    localStorage.clear();
    this.route.navigate(['/login']);
  }

  removeFromTeam(indexOfElement:number) {
    console.log("Remove the pokemon " + indexOfElement);
    this.pokemons.splice(indexOfElement, 1);
    this.pokemonService.setTeam(this.pokemons.map((pokemon) => pokemon.id)).subscribe();
  }

  addToTeam() {
    console.log("Adding the pokemon");

    if (this.pokemons.length < 6) {
      const id = Number(this.aRoute.snapshot.paramMap.get('id'));
      let pokeIds : number[] = [];
      pokeIds = this.pokemons.map((pokemon) => pokemon.id);
      pokeIds.push(id);
      this.pokemonService.setTeam(pokeIds).subscribe();
      this.ngOnInit();
    }

  }

}
