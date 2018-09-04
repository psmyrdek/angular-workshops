import { Component, OnInit } from '@angular/core';
import { PostingsListService } from '../services/postings-list.service';
import { Posting } from 'shared/models/Posting.model';

@Component({
  selector: 'app-postings-list',
  templateUrl: './postings-list.component.html',
  styleUrls: ['./postings-list.component.css']
})
export class PostingsListComponent implements OnInit {

  postings: Posting[] = [];

  constructor(private service: PostingsListService) { }

  ngOnInit() {
    this.postings = this.service.getAll();
  }

}
