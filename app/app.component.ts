import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {
  }
  
  public questions = {
    "question1": [
      { number: 1, title: 'Hepatitis B', selected: false, correct: true },
      { number: 2, title: 'Hepatitis A', selected: false, correct: true },
      { number: 3, title: 'Tuberculosis', selected: false, correct: false },
      { number: 4, title: 'Rabies', selected: false, correct: true },
      { number: 5, title: 'Poliomyelitis', selected: false, correct: false }
    ],
    "question2": [
      { number: 1, selected: false, correct: true, icon:'assets/img/icons/gDog.svg' },
      { number: 4, selected: false, correct: false, icon:'assets/img/icons/gDuck.svg'  },
      { number: 7, selected: false, correct: false, icon:'assets/img/icons/gMozzie.svg'  },
      { number: 2, selected: false, correct: true, icon:'assets/img/icons/gFox.svg'  },
      { number: 5, selected: false, correct: true, icon:'assets/img/icons/gCat.svg'  },
      { number: 8, selected: false, correct: true, icon:'assets/img/icons/gBat.svg'  },
      { number: 3, selected: false, correct: true, icon:'assets/img/icons/gMonkey.svg'  },
      { number: 6, selected: false, correct: false, icon:'assets/img/icons/gPigeon.svg'  },
      { number: 9, selected: false, correct: false, icon:'assets/img/icons/gBug.svg'  },
    ],
    "question3": [
      { number: 1, title: 'Rabies immunoglobulin is readily accessible in developing countries', selected: false, correct: true },
      { number: 2, title: 'Rabies immunoglobulin can be difficult to access in developing countries', selected: false, correct: false },
      { number: 3, title: 'Rabies is a disease spread by mammals', selected: false, correct: false },
      { number: 4, title: 'Rabies isn’t found in land dwelling mammals in Australia', selected: false, correct: false }
      ],
    "question4": [
      { number: 1, title: 'Within 28 days', selected: false, correct: false },
      { number: 2, title: 'Within 21 days', selected: false, correct: true },
      { number: 3, title: 'Within 14 days', selected: false, correct: false },
      { number: 4, title: 'Within 7 days', selected: false, correct: false }
    ]
  };
}
