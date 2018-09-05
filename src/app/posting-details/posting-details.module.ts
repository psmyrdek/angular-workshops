import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostingDetailsComponent } from './posting-details/posting-details.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [PostingDetailsComponent],
  exports: [PostingDetailsComponent]
})
export class PostingDetailsModule { }
