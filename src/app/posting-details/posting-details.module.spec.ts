import { PostingDetailsModule } from './posting-details.module';

describe('PostingDetailsModule', () => {
  let postingDetailsModule: PostingDetailsModule;

  beforeEach(() => {
    postingDetailsModule = new PostingDetailsModule();
  });

  it('should create an instance', () => {
    expect(postingDetailsModule).toBeTruthy();
  });
});
