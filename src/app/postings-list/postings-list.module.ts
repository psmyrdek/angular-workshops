import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostingsListComponent } from './postings-list/postings-list.component';
import { PostingsListEntryComponent } from './postings-list-entry/postings-list-entry.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PostingsListComponent, PostingsListEntryComponent],
  exports: [PostingsListComponent, PostingsListEntryComponent]
})
export class PostingsListModule { }
