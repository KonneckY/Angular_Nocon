import { Component } from '@angular/core';

@Component({
  selector: 'app-logowanie',
  standalone: true,
  imports: [],
  templateUrl: './logowanie.component.html',
  styleUrl: './logowanie.component.css'
})
export class LogowanieComponent {
formData = {
  username: '',
  password: ''
};

logowanie()
{
  if(this.formData.username === 'admin' && this.formData.password === 'pass'){
    console.log('zalogowano pomyślnie');
  } else {
    console.log('Błąd w logowaniu!');
  }
}



}
describe('logowanie', ()=>{
it('powinna zwrócić "zalogowano pomyślnie"', ()=>{
  const usluga = new LogowanieComponent();
  const wynik = usluga.logowanie;
  expect(wynik).toBe('zalogowano pomyślnie');
})
});