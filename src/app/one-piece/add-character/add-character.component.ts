import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../interfaces/one-piece.interface';
import { OnePieceService } from '../services/one-piece.service';

@Component({
  selector: 'app-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent {

  // @Input() characters: Character[] = [];
  @Input() newCharacter: Character = {
    name: '',
    bountie: 0,
  };

  // @Output() onNewCharacter: EventEmitter<Character> = new EventEmitter();

  constructor(
    private onePieceService: OnePieceService
  ) { }

  addNewCharacter(): void {
    if ( this.newCharacter.name.trim().length === 0 ) { return; }

    // this.onNewCharacter.emit( this.newCharacter );
    this.onePieceService.addNewCharacter( this.newCharacter );

    this.newCharacter = {
      name: '',
      bountie: 0
    };
  }

}
