import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module'; // Import modułu routingu
import { AppComponent } from './app.component';
import { LogowanieComponent } from './logowanie/logowanie.component';

@NgModule({
  declarations: [
    AppComponent,
    LogowanieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule // Dodaj moduł routingu
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
