import { PostingsListModule } from './postings-list.module';

describe('PostingsListModule', () => {
  let postingsListModule: PostingsListModule;

  beforeEach(() => {
    postingsListModule = new PostingsListModule();
  });

  it('should create an instance', () => {
    expect(postingsListModule).toBeTruthy();
  });
});
