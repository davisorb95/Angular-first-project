import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PokemonComponent } from './pokemon/pokemon.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';


@NgModule({
    declarations: [
        PokemonComponent,
        PokemonListComponent
    ],
    exports: [
        PokemonComponent,
        PokemonListComponent
    ],
    imports: [
        CommonModule
    ]
})
export class PokemonModule {}