import { Injectable } from "@angular/core";
import { Character } from '../interfaces/one-piece.interface';



@Injectable()
export class OnePieceService {

    private _characters: Character[] = [
        {
          name: 'Goldy D. Roger',
          bountie: 5564800000
        },
        {
          name: 'Monkey D. Luffy',
          bountie: 1500000000
        },
    ];

    get characters(): Character[] {
        return [...this._characters];
    }

    constructor() {}

    addNewCharacter( character: Character ): void {
        this._characters.push( character );
    }

}