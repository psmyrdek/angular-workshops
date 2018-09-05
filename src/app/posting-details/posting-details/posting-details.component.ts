import { Component, OnInit } from '@angular/core';
import { PostingDetailsService } from '../services/posting-details.service';
import { Posting } from 'shared/models/Posting.model';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-posting-details',
  templateUrl: './posting-details.component.html',
  styleUrls: ['./posting-details.component.css']
})
export class PostingDetailsComponent implements OnInit {

  posting: Posting;

  constructor(private service: PostingDetailsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.pipe(
      switchMap((params: ParamMap) => this.service.get(params['company'], params['posting']))
    )
    .subscribe((posting: Posting) => {
      this.posting = posting;
    })
  }

}
