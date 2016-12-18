import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {TodosComponent} from './components/todos.component';
import {HttpModule} from '@angular/http';

@NgModule({
  imports:      [ BrowserModule,
                    HttpModule],
  declarations: [AppComponent,
                  TodosComponent],
  bootstrap: [AppComponent]
})

export class AppModule { }
