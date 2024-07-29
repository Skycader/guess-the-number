import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.scss',
})
export class WelcomeComponent {
  public guess = '';
  public helpMessage = 'начни вводить.';

  public randomNumber = 0;
  public tries = 10;

  public ngOnInit() {
    this.randomize();
  }
  public randomize() {
    this.randomNumber = Math.floor(Math.random() * 100);
  }

  public input() {
    this.tries--;

    if (this.tries < 1) {
      alert(`Проигрыш! Моё число было ${this.randomNumber}`);
    }
    const number = Number(this.guess);
    if (this.randomNumber > number) {
      this.helpMessage = 'Моё число больше!';
    }
    if (this.randomNumber < number) {
      this.helpMessage = 'Моё число меньше!';
    }
    if (this.randomNumber === number) {
      this.helpMessage = 'Угадал!';
    }
  }

  degree = '0';

  public get style() {
    return {
      transform: 'rotate(' + this.degree + 'deg)',
    };
  }
}
