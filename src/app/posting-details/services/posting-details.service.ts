import { Injectable } from '@angular/core';
import { Posting } from 'shared/models/Posting.model';
import { PostingType } from 'shared/enums/PostingType.enum';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostingDetailsService {

  constructor(private http: HttpClient) { }

  get(companyId: string, postingId: string): Observable<Posting> {
    const url = `https://api.smartrecruiters.com/v1/companies/${companyId}/postings/${postingId}`;
    return this.http.get(url).pipe(
      map((response: any) => ({
        id: response.id,
        name: response.name,
        refNumber: response.refNumber,
        releasedDate: new Date(response.releasedDate),
        location: response.location.city,
        company: response.company,
        jobAd: {
          jobDescription: response.jobAd.sections.jobDescription.text
        },
        type: PostingType.Public
      })
      ));
  }

  // get(companyId: string, postingId: string): Posting {
  //   return {
  //     id: 1,
  //     name: 'Front-End Developer',
  //     refNumber: 'RE123',
  //     releasedDate: new Date(),
  //     location: 'London',
  //     company: {
  //       identifier: 'SmartRecruiters',
  //       name: 'SmartRecruiters',
  //       description: 'Cartoon Network'
  //     },
  //     type: PostingType.Public
  //   }
  // }

}
