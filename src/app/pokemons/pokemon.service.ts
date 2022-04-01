import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {PokemonListComponent} from "./pokemon-list/pokemon-list.component";
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule, HttpHeaders} from "@angular/common/http";
import {PagedData} from "./paged-data-model";
import {Pokemon} from "./pokemon";

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  //EXEMPLE DE RECHERCHE COMBINEE A UN OFFSET ET UNE LIMITE {{pokedexApiUrl}}/pokemons?search=B&offset=0&limit=20
  pokemonUrl: string = "http://app-ec21e68e-3e55-42d7-b1ae-3eef7507a353.cleverapps.io/pokemons";
  baseUrl: string = "http://app-ec21e68e-3e55-42d7-b1ae-3eef7507a353.cleverapps.io/";

  offset: number = 0;
  limit: number = 20;
  searchParams: string = "";

  constructor(private http: HttpClient) { }

  getPokemons(): Observable<PagedData<Pokemon>> {
    return this.http.get<PagedData<Pokemon>>(this.pokemonUrl + "?" + this.searchParams + "offset=" + this.offset + "&limit=" + this.limit);
    //return this.http.get<PagedData<Pokemon>>(this.pokemonUrl + "?offset=" + this.offset + "&limit=" + this.limit);
  }

  getPokemon(id: number): Observable<Pokemon | undefined> {
    return this.http.get<Pokemon>(this.pokemonUrl + "/" + id);
  }

  /**
   * Récupération de l'équipe du Dresseur connecté
   */
  getTeam(): Observable<Array<number>> {
    const auth_token = localStorage.getItem("access_token");
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${auth_token}`
    });
    return this.http.get<Array<number>>(this.baseUrl + "trainers/me/team", {headers});
    //return this.http.get<PagedData<Pokemon>>(this.pokemonUrl + "?offset=24&limit=6");
  }

  auth(email: string, password: string) : Observable<any> {
    return this.http.post<PagedData<Pokemon>>(this.baseUrl + "auth/login", {email, password}, {observe: "response"} );
  }

  setTeam(pokemonIds : Array<number>) {
    const auth_token = localStorage.getItem("access_token");
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${auth_token}`
    });
    return this.http.put(this.baseUrl + "trainers/me/team", pokemonIds, {headers});
  }

}
