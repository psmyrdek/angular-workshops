import { Injectable } from '@angular/core';
import { Posting } from 'shared/models/Posting.model';
import { PostingType } from 'shared/enums/PostingType.enum';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostingsListService {

  constructor(private http: HttpClient) { }

  getAll(companyIdentifier: string): Observable<Posting[]> {
    const url = `https://api.smartrecruiters.com/v1/companies/${companyIdentifier}/postings`;
    return this.http.get(url).pipe(
      map((response: any) => response.content.map(value => ({
        id: value.id,
        name: value.name,
        refNumber: value.refNumber,
        releasedDate: new Date(value.releasedDate),
        location: value.location.city,
        company: value.company,
        type: this.getPostingType(value.typeOfEmployment)
      })))
    )
  }

  // Calculates posting type based on dummy criteria
  getPostingType(typeOfEmployment: any) {
    const type = typeOfEmployment.label;
    switch (type) {
      case 'Full-time': 
        return PostingType.Public;
      default:
        return PostingType.Internal;
    }
  }

  // getAll(): Posting[] {
  //   return [
  //     {
  //       id: 1,
  //       name: 'Front-End Developer',
  //       refNumber: 'RE123',
  //       releasedDate: new Date(),
  //       location: 'London',
  //       company: {
  //         identifier: 'SmartRecruiters',
  //         name: 'SmartRecruiters',
  //         description: 'Cartoon Network'
  //       },
  //       type: PostingType.Public
  //     },
  //     {
  //       id: 2,
  //       name: 'Software Developer - Java',
  //       refNumber: 'RE126',
  //       releasedDate: new Date(),
  //       location: 'Cracow',
  //       company: {
  //         identifier: 'SmartRecruiters',
  //         name: 'SmartRecruiters',
  //         description: 'Cartoon Network'
  //       },
  //       type: PostingType.Internal
  //     },
  //     {
  //       id: 3,
  //       name: 'Software Developer - Python',
  //       refNumber: 'RE124',
  //       releasedDate: new Date(),
  //       location: 'London',
  //       company: {
  //         identifier: 'SmartRecruiters',
  //         name: 'SmartRecruiters',
  //         description: 'Cartoon Network'
  //       },
  //       type: PostingType.Public
  //     }
  //   ]
  // }
}
