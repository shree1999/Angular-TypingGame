import { Component } from '@angular/core';
import { lorem } from 'faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  sentence: string;
  userSentence: string;
  success: Boolean;

  constructor() {
    this.sentence = lorem.sentence();
    this.userSentence = '';
    this.success = false;
  }

  onInputHandler(value: string) {
    this.userSentence = value;
    if (this.userSentence === this.sentence) {
      this.success = true;
    } else {
      this.success = false;
    }
    console.log(this.userSentence);
  }

  compare(letter: string, userLetter: string) {
    if (!userLetter) {
      return '';
    }

    return letter === userLetter ? 'correct-match' : 'wrong-match';
  }

  changeSentenceHandler() {
    this.sentence = lorem.sentence();
  }
}
