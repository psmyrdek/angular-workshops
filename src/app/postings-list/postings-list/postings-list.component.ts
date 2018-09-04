import { Component, OnInit } from '@angular/core';
import { PostingsListService } from '../services/postings-list.service';
import { Posting } from 'shared/models/Posting.model';
import { PostingType } from 'shared/enums/PostingType.enum';
import { FormGroup, FormControl } from '@angular/forms';
import { distinctUntilChanged, debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-postings-list',
  templateUrl: './postings-list.component.html',
  styleUrls: ['./postings-list.component.css']
})
export class PostingsListComponent implements OnInit {

  postings: Posting[] = [];
  postingsView: Posting[] = [];

  companyForm: FormGroup = new FormGroup({
    companyName: new FormControl('SmartRecruiters')
  })

  constructor(private service: PostingsListService) { }

  ngOnInit() {
    this.fetchData();

    this.companyForm.get('companyName').valueChanges.pipe(
      distinctUntilChanged(),
      debounceTime(500)
    ).subscribe((companyName: string) => {
      this.fetchData(companyName)
    })
  }

  fetchData(companyName: string = 'SmartRecruiters') {
    this.service.getAll(companyName).subscribe(
      values => {
        this.postings = values;
        this.postingsView = [...values];
      }
    )
  }

  filterByPublic() {
    this.postingsView = this.postings.filter(x => x.type === PostingType.Public);
  }

  filterByReallyOld() {
    this.postingsView = this.postings.filter(x => {
      const timeDiff = Math.abs(new Date().getTime() - x.releasedDate.getTime());
      const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)); 
      return diffDays > 5;
    })
  }

  filterByJobFilledJobDesc() {
    this.postingsView = this.postings.filter(x => x.jobAd && x.jobAd.jobDescription);
  }

  resetFilters() {
    this.postingsView = [...this.postings];
  }

}
