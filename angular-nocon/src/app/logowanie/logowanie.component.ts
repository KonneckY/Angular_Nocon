import { Component } from '@angular/core';

@Component({
  selector: 'app-logowanie',
  templateUrl: './logowanie.component.html',
  styleUrls: ['./logowanie.component.css']
})
export class LogowanieComponent {

  constructor() { }

  onSubmit() {

    console.log('Logowanie...');

  }
}
