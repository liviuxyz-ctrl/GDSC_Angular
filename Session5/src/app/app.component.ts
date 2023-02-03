import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Session5';
  counter = 500;

  onScroll(event: number) {
    this.counter += event;
    this.counter = this.counter < 0 ? 0 : this.counter > 1000 ? 1000 : this.counter;
    console.log(this.counter);
  }

  onChange() {
    console.log(this.counter);
  }
}
