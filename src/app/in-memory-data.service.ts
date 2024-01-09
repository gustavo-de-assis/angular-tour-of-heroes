import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  constructor() {}

  createDb() {
    const heroes = [
      { id: 12, name: 'Wolverine' },
      { id: 13, name: 'NightCrawler' },
      { id: 14, name: 'Cyclops' },
      { id: 15, name: 'Beast' },
      { id: 16, name: 'Storm' },
      { id: 17, name: 'QuickSilver' },
      { id: 18, name: 'Colossus' },
      { id: 19, name: 'Jean Grey' },
      { id: 20, name: 'Spike' },
    ];
    return { heroes };
  }

  genId(heroes: Hero[]): number {
    return heroes.length > 0
      ? Math.max(...heroes.map((hero) => hero.id)) + 1
      : 11;
  }
}
