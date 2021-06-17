import { Component } from '@angular/core';
import { Character } from '../interfaces/one-piece.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  newCharacter: Character = {
    name: '',
    bountie: 0,
  };

}
