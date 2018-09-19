import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostingDetailsComponent } from './posting-details/posting-details.component';
import { PostingDetailsRoutingModule } from './posting-details-routing.module';
import { PostingDetailsEditFormComponent } from './posting-details-edit-form/posting-details-edit-form.component';
import { PostingDetailsPreviewComponent } from './posting-details-preview/posting-details-preview.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PostingDetailsRoutingModule
  ],
  declarations: [PostingDetailsComponent, PostingDetailsEditFormComponent, PostingDetailsPreviewComponent],
  exports: [PostingDetailsComponent]
})
export class PostingDetailsModule { }
