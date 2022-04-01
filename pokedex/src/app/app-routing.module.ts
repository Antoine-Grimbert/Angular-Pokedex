import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PokemonDetailComponent} from "./pokemons/pokemon-detail/pokemon-detail.component";
import {PokemonListComponent} from "./pokemons/pokemon-list/pokemon-list.component";
import {PokedexComponent} from "./pokemons/pokedex/pokedex.component";
import {TeamComponent} from "./pokemons/team/team.component";
import {AuthPageComponent} from "./pokemons/auth-page/auth-page.component";

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  //{ path: 'pokemons', component: PokemonListComponent},
  //{ path: 'pokemons/:id', component: PokemonDetailComponent},
  { path: 'pokedex', component: PokedexComponent},
  { path: 'pokedex/:id', component: PokedexComponent},
  //{ path: 'team', component: TeamComponent},
  { path: 'login', component: AuthPageComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
