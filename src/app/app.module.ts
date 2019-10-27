import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';


import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';



@NgModule({
  imports:      [ BrowserModule, FormsModule, FroalaEditorModule.forRoot(), FroalaViewModule.forRoot() ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
