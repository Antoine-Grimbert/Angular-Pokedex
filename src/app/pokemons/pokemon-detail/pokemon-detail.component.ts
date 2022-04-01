import {Component, Input, OnInit} from '@angular/core';
import {Pokemon} from "../pokemon";
import {ActivatedRoute} from "@angular/router";
import {PokemonService} from "../pokemon.service";

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit {

  @Input() pokemon: Pokemon | undefined;
  @Input() passedValue: number | undefined;

  constructor(private route: ActivatedRoute, private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.getPokemon();
  }

  ngOnChanges(): void {
    console.log("changes")
    this.getPokemon();
  }

  getPokemon(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.pokemonService.getPokemon(id).subscribe(pokemon => {this.pokemon = pokemon; }); //this.ngOnInit();
    //this.pokemonService.getPokemon(this.passedValu).subscribe(pokemon => {this.pokemon = pokemon; }); //this.ngOnInit();
  }

}
