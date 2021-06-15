import { Component } from '@angular/core';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent {
  name: string = 'Charizard';
  weight: number = 905;
  removedItem: string = '';

  persons: Person[] = [
    {
      name: 'Person 1',
      age: 30,
      country: 'CO',
    },
    {
      name: 'Person 2',
      age: 30,
      country: 'CO',
    },
    {
      name: 'Person 3',
      age: 30,
      country: 'CO',
    },
    {
      name: 'Person 4',
      age: 30,
      country: 'CO',
    },
    {
      name: 'Person 5',
      age: 30,
      country: 'CO',
    },
  ];

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  get noPersons(): boolean {
    return this.persons.length === 0;
  }

  getName(): string {
    return `${ this.name } - ${ this.weight }`;
  }

  changePokemon(): void {
    this.name = 'Snorlax';
    this.weight = 4600;
  }

  changeName(): void {
    this.name = 'Snorlax';
  }

  changeWeight(): void {
    this.weight = 4600;
  }

  deleteItem(): void {
    this.removedItem = (this.persons.shift())?.name || '';
    // const h5El: HTMLHeadingElement = document.querySelector('#title') || document.createElement('h5');
    // const pEl: HTMLHeadingElement = document.querySelector('#description') || document.createElement('p');
    
    // if (this.persons.length > 0) {
    //   h5El.classList.remove('hidden');
    //   pEl.classList.remove('hidden');
    // } else {
    //   h5El.classList.add('hidden');
    //   pEl.classList.add('hidden');
    // }
  }
}

interface Person {
  name: string;
  age: number;
  country: string;
}
