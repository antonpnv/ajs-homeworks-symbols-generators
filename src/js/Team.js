import { Character } from './Character';

export class Team {
  constructor() {
    this.characters = [];
    this.currentIndex = 0;
  }

  addCharacter(character) {
    if (!(character instanceof Character)) {
      throw new Error('Персонаж должен быть объектом типа Character');
    }
    this.characters.push(character);
  }

  *[Symbol.iterator]() {
    for (let character of this.characters) {
      yield character;
    }
  }
}
