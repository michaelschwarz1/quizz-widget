import { Injectable } from '@angular/core';
import { QuizItem } from './carousel/QuizItem';

@Injectable({
  providedIn: 'root'
})
export class QuizServiceService {

  constructor() { }
  ListQuizItems(): QuizItem[]{
    const itemList: QuizItem[] = [
      {
        id: 1,
        url: 'https://upload.wikimedia.org/wikipedia/en/a/a9/Moomin_kuva.JPG',
        text: 'Is this a munin?',
        isTrue: true
      },
      {id: 2,
        url: 'https://assets.pokemon.com/assets/cms2/img/misc/countries/at/country_detail_pokemon.png',
        text: 'Is this a munin?',
        isTrue: false
      },
      { id: 3,
         url: 'https://upload.wikimedia.org/wikipedia/en/thumb/5/59/Moomin_characters.png/220px-Moomin_characters.png',
         text: 'Is this a Pokemon?',
         isTrue: false
        }
      ];
    return itemList;
  }
}
