import { Component, OnInit, Input } from '@angular/core';
import { Posting } from 'shared/models/Posting.model';

@Component({
  selector: 'app-postings-list-entry',
  templateUrl: './postings-list-entry.component.html',
  styleUrls: ['./postings-list-entry.component.css']
})
export class PostingsListEntryComponent implements OnInit {

  @Input()
  posting: Posting;

  constructor() { }

  ngOnInit() {
  }

}
