import { Injectable } from '@angular/core';
import { Posting } from 'shared/models/Posting.model';
import { PostingType } from 'shared/enums/PostingType.enum';

@Injectable({
  providedIn: 'root'
})
export class PostingDetailsService {

  get(): Posting {
    return {
      id: 1,
      name: 'Front-End Developer',
      refNumber: 'RE123',
      releasedDate: new Date(),
      location: 'London',
      company: {
        identifier: 'SmartRecruiters',
        name: 'SmartRecruiters',
        description: 'Cartoon Network'
      },
      type: PostingType.Public
    }
  }

}
