import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostingDetailsComponent } from './posting-details/posting-details.component';
import { PostingDetailsRoutingModule } from './posting-details-routing.module';

@NgModule({
  imports: [
    CommonModule,
    PostingDetailsRoutingModule
  ],
  declarations: [PostingDetailsComponent],
  exports: [PostingDetailsComponent]
})
export class PostingDetailsModule { }
