import { Component, OnInit } from '@angular/core';
import { PostingDetailsService } from '../services/posting-details.service';
import { Posting } from 'shared/models/Posting.model';

@Component({
  selector: 'app-posting-details',
  templateUrl: './posting-details.component.html',
  styleUrls: ['./posting-details.component.css']
})
export class PostingDetailsComponent implements OnInit {

  posting: Posting;

  constructor(private service: PostingDetailsService) { }

  ngOnInit() {
    this.posting = this.service.get();
  }

}
