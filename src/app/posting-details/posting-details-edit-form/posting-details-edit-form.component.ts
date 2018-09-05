import { Component, Input } from '@angular/core';
import { Posting } from 'shared/models/Posting.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-posting-details-edit-form',
  templateUrl: './posting-details-edit-form.component.html',
  styleUrls: ['./posting-details-edit-form.component.css']
})
export class PostingDetailsEditFormComponent {

  @Input()
  posting: Posting;

  postingForm: FormGroup;

  ngOnInit() {
    this.postingForm = new FormGroup({
      name: new FormControl(this.posting.name, [Validators.required]),
      jobDescription: new FormControl(this.posting.jobAd.jobDescription),
      companyDescription: new FormControl(this.posting.company.description)
    });
  }

  onFormSubmit() {
    console.log(this.postingForm.getRawValue())
  }

}
