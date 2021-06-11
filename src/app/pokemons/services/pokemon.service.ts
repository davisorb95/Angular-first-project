import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class PokemonService {
    private url: string = 'https://pokeapi.co/api/v2';

    constructor(private http: HttpClient) { }

    getAllPokemons(): Observable<any> {
        return this.http.get<any>(`${ this.url }/pokemon?limit=1500`);
    }
}