import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostingsListComponent } from './postings-list/postings-list.component';
import { PostingsListEntryComponent } from './postings-list-entry/postings-list-entry.component';
import { PostingsFiltersModule } from 'ngx-postings-filters';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PostingsFiltersModule
  ],
  declarations: [PostingsListComponent, PostingsListEntryComponent],
  exports: [PostingsListComponent, PostingsListEntryComponent]
})
export class PostingsListModule { }
