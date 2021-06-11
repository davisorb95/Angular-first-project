import { Component } from "@angular/core";
import { PokemonService } from '../services/pokemon.service';

@Component({
    selector: 'app-pokemon-list',
    templateUrl: './pokemon-list.component.html',
    styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent {
    pokemonResults: any = [];
    
    constructor(private pokemonService: PokemonService) {}

    callGetAllPokemons(): void {
        this.pokemonService.getAllPokemons()
        .subscribe((pokemonList) => this.pokemonResults = pokemonList.results);
    }
}