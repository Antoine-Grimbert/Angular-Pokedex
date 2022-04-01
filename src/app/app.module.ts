import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PokemonListComponent } from './pokemons/pokemon-list/pokemon-list.component';
import {HttpClientModule} from "@angular/common/http";
import {MatList, MatListModule} from "@angular/material/list";
import { PokemonDetailComponent } from './pokemons/pokemon-detail/pokemon-detail.component';
import {InfiniteScrollModule} from "ngx-infinite-scroll";
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatChipsModule} from "@angular/material/chips";
import { PokedexComponent } from './pokemons/pokedex/pokedex.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatInputModule} from "@angular/material/input";
import {FormsModule} from "@angular/forms";
import { TeamComponent } from './pokemons/team/team.component';
import {MatTabsModule} from "@angular/material/tabs";
import { AuthPageComponent } from './pokemons/auth-page/auth-page.component';

@NgModule({
  declarations: [
    AppComponent,
    PokemonListComponent,
    PokemonDetailComponent,
    PokedexComponent,
    TeamComponent,
    AuthPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatListModule,
    InfiniteScrollModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatChipsModule,
    MatSidenavModule,
    MatInputModule,
    FormsModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
