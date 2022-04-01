import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {PokemonService} from "../pokemon.service";
import {Pokemon} from "../pokemon";

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {

  @Output() pokemonSelected = new EventEmitter<number>();

  pokemons: Pokemon[] | undefined;

  toSearch : string | undefined;

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.getPokemons();
  }

  getPokemons(): void {
    this.pokemonService.getPokemons().subscribe(myResult => this.pokemons = myResult.data);
  }

  onScroll() {
    console.log("Scrolled down");
    this.pokemonService.limit = this.pokemonService.limit + 10;
    this.getPokemons();
  }

  searchThis(): void {
    console.log("Search field modified to \"" + this.toSearch +"\"");
    if(this.toSearch != "") {
      this.pokemonService.searchParams = "search=" + this.toSearch + "&";
    } else {
      this.pokemonService.searchParams = "";
    }
    this.getPokemons();
  }

  pokemonSelection(id: number) {
    this.pokemonSelected.emit(id);
  }

}
