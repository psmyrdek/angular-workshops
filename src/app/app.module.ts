import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PostingsListModule } from './postings-list/postings-list.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PostingsListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
