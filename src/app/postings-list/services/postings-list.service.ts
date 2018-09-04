import { Injectable } from '@angular/core';
import { Posting } from 'shared/models/Posting.model';
import { PostingType } from 'shared/enums/PostingType.enum';

@Injectable({
  providedIn: 'root'
})
export class PostingsListService {

  getAll(): Posting[] {
    return [
      {
        id: 1,
        name: 'Front-End Developer',
        refNumber: 'RE123',
        releasedDate: new Date(),
        location: 'London',
        jobAd: {
          jobDescription: 'Very interesting job description'
        },
        company: {
          identifier: 'SmartRecruiters',
          name: 'SmartRecruiters',
          description: 'Cartoon Network'
        },
        type: PostingType.Public
      },
      {
        id: 2,
        name: 'Software Developer - Java',
        refNumber: 'RE126',
        releasedDate: new Date(),
        location: 'Cracow',
        jobAd: {
          jobDescription: 'Very interesting job description'
        },
        company: {
          identifier: 'SmartRecruiters',
          name: 'SmartRecruiters',
          description: 'Cartoon Network'
        },
        type: PostingType.Internal
      },
      {
        id: 3,
        name: 'Software Developer - Python',
        refNumber: 'RE124',
        releasedDate: new Date(),
        location: 'London',
        jobAd: {
          jobDescription: 'Very interesting job description'
        },
        company: {
          identifier: 'SmartRecruiters',
          name: 'SmartRecruiters',
          description: 'Cartoon Network'
        },
        type: PostingType.Public
      }
    ]
  }
}
