import { Component, Input } from '@angular/core';
import { Posting } from 'shared/models/Posting.model';

@Component({
  selector: 'app-posting-details-preview',
  templateUrl: './posting-details-preview.component.html',
  styleUrls: ['./posting-details-preview.component.css']
})
export class PostingDetailsPreviewComponent {

  @Input()
  posting: Posting;

}
