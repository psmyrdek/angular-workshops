import { Component, OnInit } from '@angular/core';
import { PostingsListService } from '../services/postings-list.service';
import { Posting } from 'shared/models/Posting.model';
import { PostingType } from 'shared/enums/PostingType.enum';

@Component({
  selector: 'app-postings-list',
  templateUrl: './postings-list.component.html',
  styleUrls: ['./postings-list.component.css']
})
export class PostingsListComponent implements OnInit {

  postings: Posting[] = [];
  postingsView: Posting[] = [];

  constructor(private service: PostingsListService) { }

  ngOnInit() {
    this.postings = this.service.getAll();
    this.postingsView = [...this.postings];
  }

  filterByPublic() {
    this.postingsView = this.postings.filter(x => x.type === PostingType.Public);
  }

  filterByReallyOld() {

  }

  filterByJobFilledJobDesc() {
    this.postingsView = this.postings.filter(x => x.jobAd && x.jobAd.jobDescription);
  }

  resetFilters() {
    this.postingsView = [...this.postings];
  }

}
